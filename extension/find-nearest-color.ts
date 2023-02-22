import { nearest, differenceCiede2000 } from 'culori'

export let findNearestColor = (colorList: string[], color: string): string => {
  let getNearestColor = nearest(colorList, differenceCiede2000())
  return getNearestColor(color)[0]
}
