export function awardResetInitialStateRequest() {
  return {
    type: '@awards/RESET_INITIAL_STATE_REQUEST',
  };
}

export function awardResetInitialStateSuccess() {
  return {
    type: '@awards/RESET_INITIAL_STATE_SUCCESS',
  };
}

export function awardResetInitialStateFailure() {
  return {
    type: '@awards/RESET_INITIAL_STATE_FAILURE',
  };
}
