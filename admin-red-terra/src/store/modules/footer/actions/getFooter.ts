export function getFooterRequest(
  language: string
) {
  return {
    type: '@footer/GET_FOOTER_REQUEST',
    payload: { language }
  }
}

export function getFooterSuccess(footer: any[], type: string) {
  return {
    type: '@footer/GET_FOOTER_SUCCESS',
    payload: { footer, type }
  }
}

export function getFooterFailure(type: string, message: string) {
  return {
    type: '@footer/GET_FOOTER_FAILURE',
  }
}
