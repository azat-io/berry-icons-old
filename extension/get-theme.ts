import { workspace } from 'vscode'

import { gruvbox } from '../theme/gruvbox.js'
import { github } from '../theme/github.js'

type Theme = 'default' | 'github' | 'gruvbox'

export let getTheme = (): string[] => {
  let theme = workspace.getConfiguration('berry-icons').get<Theme>('theme')
  if (!theme) {
    return []
  }
  let themes = {
    default: [],
    github,
    gruvbox,
  }
  return themes[theme]
}
