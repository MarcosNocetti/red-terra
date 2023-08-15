export function updateAuthUserRequest(userData: any) {
  return {
    type: '@auth/UPDATE_AUTH_USER_REQUEST',
    payload: { userData }
  }
}

export function updateAuthUserSuccess(userData: any) {
  return {
    type: '@auth/UPDATE_AUTH_USER_SUCCESS',
    payload: { userData }
  }
}

export function updateAuthUserFailure() {
  return {
    type: '@auth/UPDATE_AUTH_USER_FAILURE'
  }
}
