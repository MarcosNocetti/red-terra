export function forgotPasswordRequest(email: string) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: { email }
  }
}

export function forgotPasswordSuccess() {
  return {
    type: '@auth/FORGOT_PASSWORD_SUCCESS'
  }
}

export function forgotPasswordFailure(error: string) {
  return {
    type: '@auth/FORGOT_PASSWORD_FAILURE',
    payload: { error }
  }
}
