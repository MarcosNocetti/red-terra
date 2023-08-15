export function resetInitialStateRequest() {
  return {
    type: '@auth/RESET_INITIAL_STATE_REQUEST'
  }
}

export function resetInitialStateSuccess() {
  return {
    type: '@auth/RESET_INITIAL_STATE_SUCCESS'
  }
}

export function resetInitialStateFailure() {
  return {
    type: '@auth/RESET_INITIAL_STATE_FAILURE'
  }
}
