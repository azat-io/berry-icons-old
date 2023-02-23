import fs from 'fs/promises'
import path from 'path'

import { getDirname } from './get-dirname.js'

let __dirname = getDirname(import.meta.url)

export let readIcon = async ({
  id,
  type,
}: {
  id: string
  type: string
}): Promise<string> => {
  let data = await fs.readFile(
    path.join(__dirname, '/../icons', type, `${id}.svg`),
  )
  return data.toString()
}
