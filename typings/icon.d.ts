export type IconType = 'base' | 'files' | 'folders'

export type Theme = 'dark' | 'light'

export interface BaseIcon {
  id: string
  name: string
  light?: boolean
}

export interface FileIcon extends BaseIcon {
  extensions?: string[]
  files?: string[]
}

export interface FolderIcon extends BaseIcon {
  folders?: string[]
}
