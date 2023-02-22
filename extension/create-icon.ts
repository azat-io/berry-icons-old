import fs from 'fs/promises'
import path from 'path'

import { getDirname } from './get-dirname.js'

let __dirname = getDirname(import.meta.url)

export let createIcon = async (
  {
    name,
  }: {
    name: string
  },
  data: string,
): Promise<void> => {
  let distDir = path.join(__dirname, '/../dist/icons')

  await distDir.split(path.sep).reduce(async (accumulatorP, dir) => {
    let accumulator = await accumulatorP
    let currentDir = path.join(accumulator, path.sep, dir)
    try {
      await fs.stat(currentDir)
    } catch (err) {
      fs.mkdir(currentDir)
    }
    return currentDir
  }, Promise.resolve(''))

  await fs.writeFile(path.join(distDir, `${name}.svg`), data)
}
