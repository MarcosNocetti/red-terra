export function getCreditRequest() {
  return {
    type: '@whatWeDo/GET_CREDIT_REQUEST',
  }
}

export function getCreditSuccess(credit: any[], type: string) {
  return {
    type: '@whatWeDo/GET_CREDIT_SUCCESS',
    payload: { credit, type }
  }
}

export function getCreditFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/GET_CREDIT_FAILURE',
  }
}
