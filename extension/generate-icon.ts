import { updateColors } from './update-colors.js'
import { createIcon } from './create-icon.js'
import { gruvbox } from '../theme/gruvbox.js'
import { readIcon } from './read-icon.js'

export let generateIcon = async (): Promise<void> => {
  let config = {
    name: 'file',
    type: 'base',
  }
  let file = await readIcon(config)
  let newFile = updateColors(file, gruvbox)
  await createIcon(config, newFile)
}

generateIcon()
