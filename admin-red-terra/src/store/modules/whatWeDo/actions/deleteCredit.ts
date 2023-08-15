export function deleteCreditRequest(
  id: string,
  credit: any
) {
  return {
    type: '@whatWeDo/DELETE_CREDIT_REQUEST',
    payload: { id, credit }
  }
}

export function deleteCreditSuccess(credit: any[], type: string) {
  return {
    type: '@whatWeDo/DELETE_CREDIT_SUCCESS',
    payload: { credit, type }
  }
}

export function deleteCreditFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/DELETE_CREDIT_FAILURE',
    payload: { type, message }
  }
}
