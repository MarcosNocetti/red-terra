export function userResetInitialStateRequest() {
  return {
    type: '@users/RESET_INITIAL_STATE_REQUEST'
  }
}

export function userResetInitialStateSuccess() {
  return {
    type: '@users/RESET_INITIAL_STATE_SUCCESS'
  }
}

export function userResetInitialStateFailure() {
  return {
    type: '@users/RESET_INITIAL_STATE_FAILURE'
  }
}
