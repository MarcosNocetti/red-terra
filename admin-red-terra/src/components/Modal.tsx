import { IModalProps } from '../interfaces/modalProps'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiModal from '@mui/material/Modal'
import { Button, Container, Divider } from '@mui/material'

function Modal(props: IModalProps) {
  const {
    title,
    content,
    confirm,
    confirmButtonLabel,
    closeButtonLabel,
    callback,
    isOpen,
    closeModalCallback
  } = props

  function handleClose(): void {
    closeModalCallback(false)
  }

  function handleCallback(): void {
    if (callback) {
      callback()
    }

    handleClose()
  }

  return (
    <>
      <MuiModal
        open={!!isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Container
            sx={{
              padding: '0 !important',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 1.5
            }}
          >
            {confirm ? (
              <>
                <Button variant="contained" onClick={handleClose}>
                  {closeButtonLabel || 'Cancelar'}
                </Button>
                <Button variant="outlined" onClick={handleCallback}>
                  {confirmButtonLabel || 'Confirmar'}
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={handleClose}>
                {closeButtonLabel || 'Fechar'}
              </Button>
            )}
          </Container>
        </Box>
      </MuiModal>
    </>
  )
}

export default Modal
