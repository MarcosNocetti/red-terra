export function authResetBaseStateRequest() {
  return {
    type: '@auth/RESET_BASE_STATE_REQUEST'
  }
}

export function authResetBaseStateSuccess() {
  return {
    type: '@auth/RESET_BASE_STATE_SUCCESS'
  }
}

export function authResetBaseStateFailure() {
  return {
    type: '@auth/RESET_BASE_STATE_FAILURE'
  }
}
