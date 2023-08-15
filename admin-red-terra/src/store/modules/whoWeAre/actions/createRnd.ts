export function createRndRequest(
  rnd: any,
) {
  return {
    type: '@whoWeAre/CREATE_RND_REQUEST',
    payload: { rnd }
  }
}

export function createRndSuccess(type: string) {
  return {
    type: '@whoWeAre/CREATE_RND_SUCCESS',
    payload: { type }
  }
}

export function createRndFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/CREATE_RND_FAILURE',
    payload: { type, message }
  }
}
