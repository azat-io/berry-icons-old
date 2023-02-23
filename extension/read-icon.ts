import fs from 'fs/promises'
import path from 'path'

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
