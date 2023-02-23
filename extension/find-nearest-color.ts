import Color from 'colorjs.io'

let toOklch = (color: string): number[] => {
  let { coords } = new Color(color).to('oklch')
  return coords.map(coord => (isNaN(coord) ? 0 : coord))
}

export let findNearestColor = (colorList: string[], color: string): string => {
  if (!colorList.length) {
    return color
  }
  let distance: number[] = []
  let [l1, c1, h1] = toOklch(color)
  let kl = 1
  let k1 = 0.045
  let k2 = 0.015
  colorList.forEach(currentColor => {
    let [l2, c2, h2] = toOklch(currentColor)
    let cie94 = Math.sqrt(
      ((l2 - l1) / kl) ** 2 +
        ((c2 - c1) / (1 + k1 * c1)) ** 2 +
        ((h2 - h1) / (1 + k2 * c1)) ** 2,
    )
    distance.push(cie94)
  })
  let index = distance.indexOf(Math.min(...distance))
  return colorList[index]
}
