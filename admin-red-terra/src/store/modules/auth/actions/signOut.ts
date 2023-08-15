export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT_REQUEST'
  }
}

export function signOutSuccess() {
  return {
    type: '@auth/SIGN_OUT_SUCCESS'
  }
}

export function signOutFailure(error: string) {
  return {
    type: '@auth/SIGN_OUT_FAILURE',
    payload: { error }
  }
}
