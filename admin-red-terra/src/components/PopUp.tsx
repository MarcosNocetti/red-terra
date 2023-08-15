import { forwardRef, useState } from 'react'
import { Alert, AlertColor, Snackbar } from '@mui/material'
import Slide, { SlideProps } from '@mui/material/Slide'

type TransitionProps = Omit<SlideProps, 'direction'>

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

function PopUp({
  type,
  text,
  open
}: {
  type: AlertColor
  text: string
  open: boolean
}) {
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined)

  return (
    <Snackbar
      open={open}
      TransitionComponent={transition}
      key={transition ? transition.name : ''}
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: 48,
        width: '100%',
        bottom: '0 !important',
        paddingBottom: '50px',
        paddingRight: '24px',
        left: '0 !important'
      }}
    >
      <Alert severity={type}>{text}</Alert>
    </Snackbar>
  )
}

export default PopUp
