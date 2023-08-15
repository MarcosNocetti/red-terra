import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { validateEmail } from "../../helpers/validateEmail";
import { updateAuthUserRequest } from "../../store/modules/auth/actions";
import { updateUserRequest } from "../../store/modules/users/actions";

function EditUser() {
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<null | boolean>(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [user, setUser] = useState<any>();
  const { users, loading } = useSelector((state: any) => state.users);
  const { userData } = useSelector((state: any) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(users.filter((user: any) => String(user.id) === id)[0]);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const updatedData: any = { ...user };
    const email = event.currentTarget.email.value as string;
    const password = event.currentTarget.password.value as string;
    const name = event.currentTarget.userName.value as string;

    if (email?.length) {
      updatedData.email = email;
    }
    if (password?.length) {
      updatedData.password = password;
    } else {
      if (updatedData?.password?.length) delete updatedData.password;
    }
    if (name?.length) {
      updatedData.name = name;
    }

    dispatch(updateUserRequest(users, updatedData, user.id));

    if (id === String(userData.id)) {
      dispatch(updateAuthUserRequest(updatedData));
    }
  }

  function handleValidateName(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): boolean {
    event.preventDefault();

    const name = event.currentTarget.value as string;
    const isNameValid = name.length > 3;

    if (!isFormTouched) {
      setIsFormTouched(true);
    }
    if (isNameValid && emailError === false && nameError === false) {
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
    } else if (isEmailValid && nameError === false) {
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
      } else if (
        isValidPassword &&
        emailError === false &&
        nameError === false
      ) {
        setButtonEnabled(true);
      } else {
        setButtonEnabled(false);
      }
    }

    return isValidPassword;
  }

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Edit user
        </Typography>
        <Divider sx={{ marginBottom: "2rem" }} />
        {loading ? (
          <Loader />
        ) : (
          user && (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid
                container
                spacing={0}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item xs={5.9}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="userName"
                    label="Nome"
                    name="userName"
                    autoComplete="name"
                    error={!!nameError}
                    defaultValue={user.name}
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
                      Name must have at least 4 characters.
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
                    defaultValue={user.email}
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
                      E-mail invalid.
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
                      Password must have at least 6 characters.
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
                Edit
              </Button>
            </Box>
          )
        )}
      </Box>
    </>
  );
}

export default EditUser;
