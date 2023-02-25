import type { ColorScheme } from '../typings/color-scheme.d.js'
import type { Theme } from '../typings/theme.d.js'

import { workspace } from 'vscode'

import { gruvbox } from '../theme/gruvbox.js'
import { github } from '../theme/github.js'

export let getTheme = (): ColorScheme => {
  let userColorTheme = workspace
    .getConfiguration('workbench')
    .get<string>('colorTheme')
  let preferredTheme: Theme = 'inherit'
  if (userColorTheme) {
    let themes: {
      [key: string]: Theme | undefined
    } = {
      'Gruvbox Dark Hard': 'gruvbox',
      'GitHub Dark': 'github',
    }
    preferredTheme = themes[userColorTheme] ?? 'inherit'
  }
  let theme = workspace
    .getConfiguration('berryIcons')
    .get<Theme>('iconTheme', 'inherit')
  let defaultTheme: ColorScheme = {
    folderColors: {
      primary: '#5fb8d7',
      secondary: '#4cs8c2',
    },
    colors: [],
  }
  let themes: {
    [key: string]: ColorScheme | undefined
  } = {
    github,
    gruvbox,
  }
  return themes[theme === 'inherit' ? preferredTheme : theme] ?? defaultTheme
}
