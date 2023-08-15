export function getRdnRequest( ) {
  return {
    type: '@whoWeAre/GET_RDN_REQUEST',
  }
}

export function getRdnSuccess(rdn: any[], type: string) {
  return {
    type: '@whoWeAre/GET_RDN_SUCCESS',
    payload: { rdn, type }
  }
}

export function getRdnFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/GET_RDN_FAILURE',
  }
}
