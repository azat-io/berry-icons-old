declare module 'culori' {
  function nearestFn(color: string[]): string
  export function nearest(colorList: string[], diffFn: undefined): nearestFn
  export function differenceCmc(): undefined
}
