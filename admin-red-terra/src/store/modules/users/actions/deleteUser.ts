import { IUser } from "../../../../interfaces/user"

export function deleteUserRequest(
  id: string,
  users: any
) {
  return {
    type: '@users/DELETE_USER_REQUEST',
    payload: { id, users }
  }
}

export function deleteUserSuccess(users: IUser[], type: string) {
  return {
    type: '@users/DELETE_USER_SUCCESS',
    payload: { users, type }
  }
}

export function deleteUserFailure(type: string, message: string) {
  return {
    type: '@users/DELETE_USER_FAILURE',
    payload: { type, message }
  }
}
