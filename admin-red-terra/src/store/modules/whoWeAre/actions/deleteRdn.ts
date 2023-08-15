export function deleteRdnRequest(
  id: string,
  rdn: any
) {
  return {
    type: '@whoWeAre/DELETE_RDN_REQUEST',
    payload: { id, rdn }
  }
}

export function deleteRdnSuccess(rdn: any[], type: string) {
  return {
    type: '@whoWeAre/DELETE_RDN_SUCCESS',
    payload: { rdn, type }
  }
}

export function deleteRdnFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/DELETE_RDN_FAILURE',
    payload: { type, message }
  }
}
