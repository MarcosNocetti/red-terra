import { IUser } from '../../../../interfaces/user'

export function updateUserRequest(
  users: IUser[],
  updatedUserData: IUser,
  id: string
) {
  return {
    type: '@users/UPDATE_USER_REQUEST',
    payload: { users, updatedUserData, id }
  }
}

export function updateUserSuccess(users: IUser[], message: string) {
  return {
    type: '@users/UPDATE_USER_SUCCESS',
    payload: { users, message }
  }
}

export function updateUserFailure(error: string) {
  return {
    type: '@users/UPDATE_USER_FAILURE',
    payload: { error }
  }
}
