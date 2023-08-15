export function getDocumentaryByRelationRequest(id: string) {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_REQUEST',
    payload: {
      id
    }
  }
}

export function getDocumentaryByRelationSuccess(documentaryRelation: any[], type: string) {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_SUCCESS',
    payload: { documentaryRelation, type }
  }
}

export function getDocumentaryByRelationFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_FAILURE',
  }
}
