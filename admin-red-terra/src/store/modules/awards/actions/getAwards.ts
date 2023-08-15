export function getAwardsRequest() {
  return {
    type: '@awards/GET_AWARDS_REQUEST',
  };
}

export function getAwardsSuccess(awards: any[]) {
  return {
    type: '@awards/GET_AWARDS_SUCCESS',
    payload: { awards },
  };
}

export function getAwardsFailure(error: string) {
  return {
    type: '@awards/GET_AWARDS_FAILURE',
    payload: { error },
  };
}
