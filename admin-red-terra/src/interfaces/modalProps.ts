export interface IModalProps {
  title: string
  content: string
  closeButtonLabel?: string
  confirmButtonLabel?: string
  isOpen?: boolean
  confirm?: boolean
  callback?: (...args: any[]) => void
  closeModalCallback: (arg: boolean) => void
}
