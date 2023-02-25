import type { IconType } from '../typings/icon.d.js'

import svgo from 'svgo'

import { updateColors } from './update-colors.js'
import { createIcon } from './create-icon.js'
import { getTheme } from './get-theme.js'
import { readIcon } from './read-icon.js'

export let generateIcon = async (
  config: {
    id: string
    hash: string
    type: IconType
  },
  directory: string,
): Promise<void> => {
  let { id, type } = config
  let isFolder = type === 'folders' || id === 'folder' || id === 'folder-open'
  let file = await readIcon(config)
  let optimizedFile = svgo.optimize(file).data
  let theme = getTheme()
  let folderPrimary = '#5fb8d7'
  let folderSecondary = '#4ca8c2'
  let newFile = updateColors(
    optimizedFile,
    theme.colors,
    isFolder
      ? {
          [folderPrimary]: theme.folderColors.primary,
          [folderSecondary]: theme.folderColors.secondary,
        }
      : theme.colorOverrides?.[id],
  )
  await createIcon(config, directory, newFile)
}
