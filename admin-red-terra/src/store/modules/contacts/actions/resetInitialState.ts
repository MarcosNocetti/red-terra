export function contactResetInitialStateRequest() {
  return {
    type: '@contacts/RESET_INITIAL_STATE_REQUEST'
  }
}

export function contactResetInitialStateSuccess() {
  return {
    type: '@contacts/RESET_INITIAL_STATE_SUCCESS'
  }
}

export function contactResetInitialStateFailure() {
  return {
    type: '@contacts/RESET_INITIAL_STATE_FAILURE'
  }
}
