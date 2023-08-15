export function homeResetInitialStateRequest() {
  return {
    type: '@home/RESET_INITIAL_STATE_REQUEST'
  }
}

export function homeResetInitialStateSuccess() {
  return {
    type: '@home/RESET_INITIAL_STATE_SUCCESS'
  }
}

export function homeResetInitialStateFailure() {
  return {
    type: '@home/RESET_INITIAL_STATE_FAILURE'
  }
}
