import { IUserSign } from '../../../../interfaces/userSign'

export function signUpRequest(userSignData: IUserSign) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: userSignData
  }
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS'
  }
}

export function signUpFailure(error: string) {
  return {
    type: '@auth/SIGN_UP_FAILURE',
    payload: { error }
  }
}
