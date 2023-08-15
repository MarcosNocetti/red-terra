export function deleteDocumentaryRequest(
  id: string,
  documentary: any
) {
  return {
    type: '@whatWeDo/DELETE_DOCUMENTARY_REQUEST',
    payload: { id, documentary }
  }
}

export function deleteDocumentarySuccess(documentary: any[], type: string) {
  return {
    type: '@whatWeDo/DELETE_DOCUMENTARY_SUCCESS',
    payload: { documentary, type }
  }
}

export function deleteDocumentaryFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/DELETE_DOCUMENTARY_FAILURE',
    payload: { type, message }
  }
}
