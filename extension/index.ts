import { build } from './build.js'

export let activate = async (): Promise<void> => {
  await build()
}
