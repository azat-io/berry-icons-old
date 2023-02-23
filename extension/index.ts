import { getTheme } from './get-theme.js'
import { build } from './build.js'

export let activate = async (): Promise<void> => {
  getTheme()
  await build()
}
