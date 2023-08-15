export function updateDocumentaryRequest(
  updateDocumentary: any,
  id: string
) {
  return {
    type: '@whatWeDo/UPDATE_DOCUMENTARY_REQUEST',
    payload: { updateDocumentary, id }
  }
}

export function updateDocumentarySuccess(type: string) {
  return {
    type: '@whatWeDo/UPDATE_DOCUMENTARY_SUCCESS',
    payload: { type }
  }
}

export function updateDocumentaryFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/UPDATE_DOCUMENTARY_FAILURE',
    payload: { type, message }
  }
}
