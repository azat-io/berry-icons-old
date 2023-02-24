import type {
  FolderIcon,
  BaseIcon,
  FileIcon,
  IconType,
  Theme,
} from '../typings/icon.d.js'

import fs from 'fs/promises'
import path from 'path'

import { createHashedName } from './create-hashed-name.js'
import { generateIcon } from './generate-icon.js'
import { filesIcons } from '../data/files.js'
import { baseIcons } from '../data/base.js'
import { makeId } from './make-id.js'

interface IconDefinitions {
  [key: string]: {
    iconPath: string
  }
}

interface BuildOptions extends FileIcon, FolderIcon {
  theme: Theme
  type: IconType
  id: string
}

interface IconSchema {
  folderNames: {
    [key: string]: string
  }
  folderNamesExpanded: {
    [key: string]: string
  }
  fileExtensions: {
    [key: string]: string
  }
  fileNames: {
    [key: string]: string
  }
}

export let build = async (): Promise<void> => {
  let distDir = path.join(__dirname, '/../dist')
  let iconDefinitions: IconDefinitions = {}
  let createIconSchema = (): IconSchema => ({
    folderNames: {},
    folderNamesExpanded: {},
    fileExtensions: {},
    fileNames: {},
  })
  let themedData: {
    dark: IconSchema
    light: IconSchema
  } = { dark: createIconSchema(), light: createIconSchema() }
  let updateThemedData = ({
    extensions,
    files,
    theme,
    id,
  }: FileIcon & { theme: Theme }): void => {
    let data = themedData[theme]
    if (extensions) {
      extensions.forEach(extension => {
        data.fileExtensions[extension] = id
      })
    }
    if (files) {
      files.forEach(file => {
        data.fileNames[file] = id
      })
    }
  }
  let buildIcon = async (config: BuildOptions): Promise<void> => {
    let hash = makeId()
    iconDefinitions[config.id] = {
      iconPath: path.join(
        'icons',
        `${createHashedName({ hash, ...config })}.svg`,
      ),
    }
    generateIcon({ hash, ...config })
    updateThemedData(config)
  }
  let formatIconsValues = (
    icons: (BaseIcon | FileIcon)[],
    type: IconType,
  ): BuildOptions[] =>
    icons.reduce(
      (accumulator: BuildOptions[], { id, light, ...props }) => [
        ...accumulator,
        {
          theme: 'dark',
          id,
          type,
          ...props,
        },
        ...(light
          ? [
              {
                theme: 'light' as Theme,
                id: `${id}-light`,
                type,
                ...props,
              },
            ]
          : []),
      ],
      [],
    )
  await Promise.all([
    ...formatIconsValues(baseIcons, 'base').map(value => buildIcon(value)),
    ...formatIconsValues(filesIcons, 'files').map(value => buildIcon(value)),
  ])
  let schema = {
    iconDefinitions,
    ...themedData.dark,
    light: {
      ...themedData.light,
    },
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folder-open',
    hidesExplorerArrows: true,
  }
  await fs.writeFile(path.join(distDir, 'index.json'), JSON.stringify(schema))
}
