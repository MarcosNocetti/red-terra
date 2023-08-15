export function updateWhoWeAreRequest(
  updateWhoWeAre: any,
  id: string
) {
  return {
    type: '@whoWeAre/UPDATE_WHO_WE_ARE_REQUEST',
    payload: { updateWhoWeAre, id }
  }
}

export function updateWhoWeAreSuccess(whoWeAre: any[], type: string) {
  return {
    type: '@whoWeAre/UPDATE_WHO_WE_ARE_SUCCESS',
    payload: { whoWeAre, type }
  }
}

export function updateWhoWeAreFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/UPDATE_WHO_WE_ARE_FAILURE',
    payload: { type, message }
  }
}
