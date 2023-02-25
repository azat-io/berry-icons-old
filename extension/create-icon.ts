import fs from 'fs/promises'
import path from 'path'

import { createHashedName } from './create-hashed-name.js'

export let createIcon = async (
  config: {
    id: string
    hash: string
  },
  directory: string,
  data: string,
): Promise<void> => {
  await fs.writeFile(
    path.join(directory, `${createHashedName(config)}.svg`),
    data,
  )
}
