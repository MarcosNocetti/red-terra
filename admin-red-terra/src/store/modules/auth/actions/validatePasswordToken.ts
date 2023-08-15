export function validatePasswordTokenRequest(token: string) {
  return {
    type: '@auth/VALIDATE_PASSWORD_TOKEN_REQUEST',
    payload: { token }
  }
}

export function validatePasswordTokenSuccess() {
  return {
    type: '@auth/VALIDATE_PASSWORD_TOKEN_SUCCESS'
  }
}

export function validatePasswordTokenFailure(error: string) {
  return {
    type: '@auth/VALIDATE_PASSWORD_TOKEN_FAILURE',
    payload: { error }
  }
}
