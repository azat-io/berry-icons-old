import Color from 'colorjs.io'

export let findNearestColor = (colorList: string[], color: string): string => {
  if (!colorList.length) {
    return color
  }
  let distance: number[] = []
  let baseColor = new Color(color)
  colorList.forEach(currentColor => {
    let comparisonColor = new Color(currentColor)
    distance.push(baseColor.distance(comparisonColor, 'srgb'))
  })
  let index = distance.indexOf(Math.min(...distance))
  return colorList[index]
}
