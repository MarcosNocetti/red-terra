export function getWhatWeDoRequest(
  language: string
) {
  return {
    type: '@whatWeDo/GET_WHAT_WE_DO_REQUEST',
    payload: { language }
  }
}

export function getWhatWeDoSuccess(whatWeDo: any[], type: string) {
  return {
    type: '@whatWeDo/GET_WHAT_WE_DO_SUCCESS',
    payload: { whatWeDo, type }
  }
}

export function getWhatWeDoFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/GET_WHAT_WE_DO_FAILURE',
    payload: { message, type }
  }
}
