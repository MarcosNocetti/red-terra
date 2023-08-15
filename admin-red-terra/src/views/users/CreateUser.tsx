import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { validateEmail } from "../../helpers/validateEmail";
import { createUserRequest } from "../../store/modules/users/actions";

function CreateUser() {
  const dispatch = useDispatch();
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [emailError, setEmailError] = useState<null | boolean>(null);
  const [nameError, setNameError] = useState<null | boolean>(null);
  const [passwordError, setPasswordError] = useState<null | boolean>(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const { loading } = useSelector((state: any) => state.users);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const name = data.get("name") as string;

    dispatch(createUserRequest(email.trim(), name, password));
  }

  function handleValidateName(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean {
    event.preventDefault();

    const name = event.currentTarget.value as string;
    const isNameValid = name.length > 5;

    if (!isFormTouched) {
      setIsFormTouched(true);
    } else if (isNameValid && emailError === false && passwordError === false) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }

    setNameError(!isNameValid);

    return isNameValid;
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
    const isValidPassword = password.length > 5;

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
    <Box>
      <Typography variant="h4" component="h1">
        Create user
      </Typography>
      <Divider sx={{ marginBottom: "2rem" }} />
      {loading ? (
        <Loader />
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={5.9}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                autoFocus
                error={!!nameError}
                onBlur={(
                  event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleValidateName(event)}
              />
              {nameError && (
                <Typography
                  sx={{ color: "#d32f2f" }}
                  variant="caption"
                  paragraph
                >
                  Nome precisa ter no mínimo 6 caracteres.
                </Typography>
              )}
            </Grid>
            <Grid item xs={5.9}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type="email"
                autoComplete="email"
                error={!!emailError}
                onBlur={(
                  event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleValidateEmail(event)}
              />
              {emailError && (
                <Typography
                  sx={{ color: "#d32f2f" }}
                  variant="caption"
                  paragraph
                >
                  Formato de e-mail inválido.
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
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
                  sx={{ color: "#d32f2f" }}
                  variant="caption"
                  paragraph
                >
                  Senha inválido.
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!buttonEnabled}
          >
            Entrar
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default CreateUser;
