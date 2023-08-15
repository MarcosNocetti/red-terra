import { IUser } from '../../../../interfaces/user'

export function createUserRequest(
  email: string,
  name: string,
  password: string
) {
  return {
    type: '@users/CREATE_USER_REQUEST',
    payload: {
      name,
      email,
      password
    }
  }
}

export function createUserSuccess(user: IUser, type: string) {
  return {
    type: '@users/CREATE_USER_SUCCESS',
    payload: { user, type }
  }
}

export function createUserFailure(type: string, message: string) {
  return {
    type: '@users/CREATE_USER_FAILURE',
    payload: { type, message }
  }
}
