export interface ColorScheme {
  folderColors: {
    primary: string
    secondary: string
  }
  colors: string[]
  colorOverrides?: {
    [key: string]: {
      [key: string]: string
    }
  }
}
