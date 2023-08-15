
export function createDocumentaryRequest(createDocumentary: any) {
  return {
    type: '@whatWeDo/CREATE_DOCUMENTARY_REQUEST',
    payload: { createDocumentary }
  }
}

export function createDocumentarySuccess(type: string) {
  return {
    type: '@whatWeDo/CREATE_DOCUMENTARY_SUCCESS',
    payload: { type }
  }
}

export function createDocumentaryFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/CREATE_DOCUMENTARY_FAILURE',
    payload: { type, message }
  }
}
