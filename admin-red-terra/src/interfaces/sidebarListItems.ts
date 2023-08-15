export interface ISidebarListItems {
  label: string
  pathname?: string
  open: boolean
  items?: {
    label: string
    pathname: string
  }[]
}
