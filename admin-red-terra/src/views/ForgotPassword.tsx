import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { validateEmail } from '../helpers/validateEmail'
import { CircularProgress } from '@mui/material'
import { forgotPasswordRequest } from '../store/modules/auth/actions'
import { authResetBaseStateRequest } from '../store/modules/auth/actions/resetBaseState'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import PopUp from '../components/PopUp'

const theme = createTheme()

function ForgotPassword() {
  const [emailError, setEmailError] = useState<null | boolean>(null)
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const [open, setOpen] = useState(false)
  const { error, success, signed, loading, userData } = useSelector(
    (state: any) => state.auth
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (signed && userData.active) {
      navigate('/admin')
    }

    if (success) {
      setOpen(true)
      setTimeout(() => setOpen(false), 3000)
    }
  }, [emailError, error, signed, loading, success, navigate, userData])

  useEffect(() => {
    return () => {
      dispatch(authResetBaseStateRequest())
    }
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string

    dispatch(forgotPasswordRequest(email.trim()))
  }

  function handleValidateEmail(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean {
    event.preventDefault()

    const email = event.currentTarget.value as string
    const isEmailValid = validateEmail(email)

    if (isEmailValid) {
      setButtonEnabled(true)
    } else {
      setButtonEnabled(false)
    }

    setEmailError(!isEmailValid)

    return isEmailValid
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh'
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Esqueci minha senha
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, width: '60vw', maxWidth: '400px' }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    error={!!emailError}
                    onBlur={(
                      event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleValidateEmail(event)}
                  />
                  {emailError && (
                    <Typography
                      sx={{ color: '#d32f2f' }}
                      variant="caption"
                      paragraph
                    >
                      Formato de e-mail inválido.
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!buttonEnabled}
                  >
                    Enviar e-mail
                  </Button>
                  <Link
                    onClick={() => navigate('/signin')}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    variant="body2"
                  >
                    <ChevronLeftIcon /> Voltar
                  </Link>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default ForgotPassword
