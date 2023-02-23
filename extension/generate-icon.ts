import type { IconType } from '../typings/icon.d.js'

import svgo from 'svgo'

import { updateColors } from './update-colors.js'
import { createIcon } from './create-icon.js'
import { gruvbox } from '../theme/gruvbox.js'
import { readIcon } from './read-icon.js'

export let generateIcon = async (config: {
  id: string
  hash: string
  type: IconType
}): Promise<void> => {
  let file = await readIcon(config)
  let optimizedFile = svgo.optimize(file).data
  let newFile = updateColors(optimizedFile, gruvbox)
  await createIcon(config, newFile)
}
