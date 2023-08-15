import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CircularProgress } from '@mui/material'
import { updatePasswordRequest } from '../store/modules/auth/actions'
import { authResetBaseStateRequest } from '../store/modules/auth/actions/resetBaseState'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { popupRequest } from '../store/modules/popup/actions'
const theme = createTheme()

function UpdatePassword() {
  const [passwordError, setPasswordError] = useState<null | boolean>(null)
  const [buttonEnabled, setButtonEnabled] = useState(false)
  const { error, success, signed, loading, userData } = useSelector(
    (state: any) => state.auth
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (signed && userData.active) {
      navigate('/admin')
      if (success) {
        dispatch(popupRequest('Senha atualizada com sucesso!', 'success'))
      }
    }

    if (error) {
      dispatch(popupRequest('Erro ao atualizar senha!', 'error'))
    }
    if (!signed) {
      navigate('/')
    }
  }, [signed, navigate, userData, error, success, dispatch])

  useEffect(() => {
    return () => {
      dispatch(authResetBaseStateRequest())
    }
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const password = data.get('password') as string

    dispatch(updatePasswordRequest(password, userData.id))
  }

  function handleValidatePassword(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean {
    event.preventDefault()

    const password = event.currentTarget.value as string
    const isPasswordValid = password.length >= 6

    if (isPasswordValid) {
      setButtonEnabled(true)
    } else {
      setButtonEnabled(false)
    }

    setPasswordError(!isPasswordValid)

    return isPasswordValid
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
                  Update Password
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
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    error={!!passwordError}
                    onChange={(
                      event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleValidatePassword(event)}
                    defaultValue="admin123"
                  />
                  {passwordError && (
                    <Typography
                      sx={{ color: '#d32f2f' }}
                      variant="caption"
                      paragraph
                    >
                      Senha inválida. A senha deve conter pelo menos 6
                      caracteres.
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!buttonEnabled}
                  >
                    Update
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}
export default UpdatePassword
