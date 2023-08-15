import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reauthRequest, signInRequest } from '../store/modules/auth/actions';
import { validateEmail } from '../helpers/validateEmail';
import { CircularProgress } from '@mui/material';
import { authResetBaseStateRequest } from '../store/modules/auth/actions/resetBaseState';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const theme = createTheme();

function SignIn() {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [emailError, setEmailError] = useState<null | boolean>(null);
  const [emailOrPasswordError, setEmailOrPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState<null | boolean>(null);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const { error, signed, loading } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!signed) {
      dispatch(reauthRequest());
    }
  }, []);

  useEffect(() => {
    if (error) {
      setEmailOrPasswordError(true);
    } else {
      setEmailOrPasswordError(false);
    }
  }, [emailError, passwordError, isFormTouched, error, navigate, loading]);

  useEffect(() => {
    if (signed) {
      navigate('/admin/awards');
    }
  }, [signed, navigate]);

  useEffect(() => {
    return () => {
      dispatch(authResetBaseStateRequest());
    };
  }, [dispatch]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    dispatch(signInRequest(email.trim(), password));
  }

  function handleValidateEmail(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean {
    event.preventDefault();

    const email = event.currentTarget.value as string;
    const isEmailValid = validateEmail(email);

    if (!isFormTouched) {
      setIsFormTouched(true);
    } else if (isEmailValid && passwordError === false) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }

    setEmailError(!isEmailValid);

    return isEmailValid;
  }

  function handleValidatePassword(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    isOnBlur: boolean = false
  ): boolean {
    event.preventDefault();

    if (!isFormTouched) {
      setIsFormTouched(true);
    }

    const password = event.currentTarget.value as string;
    const isValidPassword = password.length >= 6;

    if (isOnBlur) {
      setPasswordError(!isValidPassword);
    } else {
      if (!isFormTouched) {
        setIsFormTouched(true);
      } else if (isValidPassword && emailError === false) {
        setButtonEnabled(true);
      } else {
        setButtonEnabled(false);
      }
    }

    return isValidPassword;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography component="h1" variant="h5">
                Admin - Red Terra
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!passwordError}
                  onChange={(
                    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleValidatePassword(event)}
                  onBlur={(
                    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => handleValidatePassword(event, true)}
                />
                {passwordError && (
                  <Typography
                    sx={{ color: '#d32f2f' }}
                    variant="caption"
                    paragraph
                  >
                    Senha inválido.
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={!buttonEnabled}
                >
                  Entrar
                </Button>
                {emailOrPasswordError && (
                  <Typography
                    sx={{ color: '#d32f2f' }}
                    variant="caption"
                    align="center"
                    paragraph
                  >
                    Email e/ou senha inválida.
                  </Typography>
                )}
                {/* <Link
                  onClick={() => navigate('/forgot-password')}
                  style={{ cursor: 'pointer' }}
                  variant="body2"
                >
                  Esqueceu a senha?
                </Link> */}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
