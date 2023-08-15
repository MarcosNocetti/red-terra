export function updateCreditRequest(
  updateCredit: any,
  id: string
) {
  return {
    type: '@whatWeDo/UPDATE_CREDIT_REQUEST',
    payload: { updateCredit, id }
  }
}

export function updateCreditSuccess(type: string) {
  return {
    type: '@whatWeDo/UPDATE_CREDIT_SUCCESS',
    payload: { type }
  }
}

export function updateCreditFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/UPDATE_CREDIT_FAILURE',
    payload: { type, message }
  }
}
