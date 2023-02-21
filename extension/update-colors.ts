import { findNearestColor } from './find-nearest-color.js'

export let updateColors = (
  string: string,
  colors: string[],
  colorFixes: { [key: string]: string | undefined } = {},
): string => {
  let hexPattern =
    /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua/g
  return string.replace(hexPattern, matched => {
    return colorFixes[matched] ?? findNearestColor(colors, matched)
  })
}
