export function updateRdnRequest(
  updateRdn: any,
  id: string
) {
  return {
    type: '@whoWeAre/UPDATE_RDN_REQUEST',
    payload: { updateRdn, id }
  }
}

export function updateRdnSuccess(type: string) {
  return {
    type: '@whoWeAre/UPDATE_RDN_SUCCESS',
    payload: { type }
  }
}

export function updateRdnFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/UPDATE_RDN_FAILURE',
    payload: { type, message }
  }
}
