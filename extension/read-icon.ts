import fs from 'fs/promises'
import path from 'path'

import { getDirname } from './get-dirname.js'

let __dirname = getDirname(import.meta.url)

export let readIcon = async ({
  name,
  type,
}: {
  name: string
  type: string
}): Promise<string> => {
  let data = await fs.readFile(
    path.join(__dirname, '/../icons', type, `${name}.svg`),
  )
  return data.toString()
}
