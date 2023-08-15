export function updateAwardRequest(
  awards: any[],
  updatedAwardData: any,
  id: string
) {
  return {
    type: '@awards/UPDATE_AWARD_REQUEST',
    payload: { awards, updatedAwardData, id },
  };
}

export function updateAwardSuccess(awards: any[], message: string) {
  return {
    type: '@awards/UPDATE_AWARD_SUCCESS',
    payload: { awards, message },
  };
}

export function updateAwardFailure(error: string) {
  return {
    type: '@awards/UPDATE_AWARD_FAILURE',
    payload: { error },
  };
}
