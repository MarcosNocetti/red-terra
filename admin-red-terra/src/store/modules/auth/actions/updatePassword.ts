import { IUser } from '../../../../interfaces/user'

export function updatePasswordRequest(password: string, id: string) {
  return {
    type: '@auth/UPDATE_PASSWORD_REQUEST',
    payload: { password, id }
  }
}

export function updatePasswordSuccess(userData: IUser) {
  return {
    type: '@auth/UPDATE_PASSWORD_SUCCESS',
    payload: { userData }
  }
}

export function updatePasswordFailure(error: string) {
  return {
    type: '@auth/UPDATE_PASSWORD_FAILURE',
    payload: { error }
  }
}
