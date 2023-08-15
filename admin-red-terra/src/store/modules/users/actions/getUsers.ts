import { IUser } from '../../../../interfaces/user'

export function getUsersRequest() {
  return {
    type: '@users/GET_USERS_REQUEST'
  }
}

export function getUsersSuccess(users: IUser[]) {
  return {
    type: '@users/GET_USERS_SUCCESS',
    payload: { users }
  }
}

export function getUsersFailure(error: string) {
  return {
    type: '@users/GET_USERS_FAILURE',
    payload: { error }
  }
}
