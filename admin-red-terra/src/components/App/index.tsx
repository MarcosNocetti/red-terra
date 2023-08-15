import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popupResetInitialStateRequest } from '../../store/modules/popup/actions/resetInitialState'
import PopUp from '../PopUp'
import Routes from '../Routes'

function App() {
  const [open, setOpen] = useState(false)
  const { text, type, success } = useSelector((state: any) => state.popup)
  const dispatch = useDispatch()

  useEffect(() => {
    if (success) {
      setOpen(true)
    }
  }, [success])

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dispatch(popupResetInitialStateRequest())
        setOpen(false)
      }, 3000)
    }
  }, [open])

  return (
    <>
      <Routes />
      <PopUp text={text} type={type} open={open} />
    </>
  )
}

export default App
