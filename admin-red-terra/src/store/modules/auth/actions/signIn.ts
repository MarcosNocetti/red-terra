import { IUser } from '../../../../interfaces/user';

export function signInRequest(username: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function reauthRequest() {
  return {
    type: '@auth/REAUTH_REQUEST',
  };
}

export function reauthSuccess(userData: IUser) {
  return {
    type: '@auth/REAUTH_SUCCESS',
    payload: { userData },
  };
}

export function reauthFailure(error?: string) {
  return {
    type: '@auth/REAUTH_FAILURE',
    payload: { error },
  };
}

export function signInSuccess(userData: IUser) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { userData },
  };
}

export function signInFailure(error: string) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: { error },
  };
}
