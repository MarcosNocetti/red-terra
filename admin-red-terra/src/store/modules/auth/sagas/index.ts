import { takeLatest } from 'redux-saga/effects';
import { forgotPassword } from './forgotPassword';
import { resetBaseState } from './resetBaseState';
import { resetInitialState } from './resetInitialState';
import { reauth, signIn } from './signIn';
import { signOut } from './signOut';
import { signUp } from './signUp';
import { updateAuthUser } from './updateAuthUser';
import { updatePassword } from './updatePassword';
import { validatePasswordToken } from './validatePasswordToken';

// eslint-disable-next-line
export default [
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/REAUTH_REQUEST', reauth),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/UPDATE_PASSWORD_REQUEST', updatePassword),
  takeLatest('@auth/UPDATE_AUTH_USER_REQUEST', updateAuthUser),
  takeLatest('@auth/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@auth/RESET_INITIAL_STATE_REQUEST', resetInitialState),
  takeLatest('@auth/VALIDATE_PASSWORD_TOKEN', validatePasswordToken),
];
