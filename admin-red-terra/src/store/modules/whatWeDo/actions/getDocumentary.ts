export function getDocumentaryRequest() {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_REQUEST',
  }
}

export function getDocumentarySuccess(documentary: any[], type: string) {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_SUCCESS',
    payload: { documentary, type }
  }
}

export function getDocumentaryFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/GET_DOCUMENTARY_FAILURE',
  }
}
