export function getWhoWeAreRequest(
  language: string
) {
  return {
    type: '@whoWeAre/GET_WHO_WE_ARE_REQUEST',
    payload: { language }
  }
}

export function getWhoWeAreSuccess(whoWeAre: any[], type: string) {
  return {
    type: '@whoWeAre/GET_WHO_WE_ARE_SUCCESS',
    payload: { whoWeAre, type }
  }
}

export function getWhoWeAreFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/GET_WHO_WE_ARE_FAILURE',
  }
}
