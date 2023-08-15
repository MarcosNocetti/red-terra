export function footerRequest(
  updateFooter: any,
  id: string
) {
  return {
    type: '@footer/FOOTER_REQUEST',
    payload: { updateFooter, id }
  }
}

export function footerSuccess(type: string) {
  return {
    type: '@footer/FOOTER_SUCCESS',
    payload: { type }
  }
}

export function footerFailure(type: string, message: string) {
  return {
    type: '@footer/FOOTER_FAILURE',
    payload: { type, message }
  }
}
