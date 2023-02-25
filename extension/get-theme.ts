import type { ColorScheme } from '../typings/color-scheme.d.js'

import { workspace } from 'vscode'

import { gruvbox } from '../theme/gruvbox.js'
import { github } from '../theme/github.js'

type Theme = 'default' | 'github' | 'gruvbox'

export let getTheme = (): ColorScheme => {
  let theme = workspace.getConfiguration('berryIcons').get<Theme>('iconTheme')
  let defaultTheme: ColorScheme = {
    folderColors: {
      primary: '#5fb8d7',
      secondary: '#4cs8c2',
    },
    colors: [],
  }
  if (!theme) {
    return defaultTheme
  }
  let themes = {
    default: defaultTheme,
    github,
    gruvbox,
  }
  return themes[theme]
}
