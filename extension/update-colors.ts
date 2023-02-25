import { findNearestColor } from './find-nearest-color.js'

export let updateColors = (
  string: string,
  colors: string[],
  colorOverrides: { [key: string]: string } = {},
): string => {
  let hexPattern =
    /#([a-f0-9]{6}|[a-f0-9]{3})|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua/gi
  return string.replace(
    hexPattern,
    matched =>
      colorOverrides[matched.toLowerCase()] ||
      findNearestColor(colors, matched),
  )
}
