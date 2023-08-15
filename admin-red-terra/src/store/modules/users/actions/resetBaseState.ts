export function userResetBaseStateRequest() {
  return {
    type: '@users/RESET_BASE_STATE_REQUEST'
  }
}

export function userResetBaseStateSuccess() {
  return {
    type: '@users/RESET_BASE_STATE_SUCCESS'
  }
}

export function userResetBaseStateFailure() {
  return {
    type: '@users/RESET_BASE_STATE_FAILURE'
  }
}
