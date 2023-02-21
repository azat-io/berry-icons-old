import { nearest, differenceCmc } from 'culori'

export let findNearestColor = (colorList: string[], color: string): string => {
  let getNearestColor = nearest(colorList, differenceCmc())
  return getNearestColor(color)[0]
}
