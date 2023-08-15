export function updateWhatWeDoRequest(
  updateWhatWeDo: any,
  id: string
) {
  return {
    type: '@whatWeDo/UPDATE_WHAT_WE_DO_REQUEST',
    payload: { updateWhatWeDo, id }
  }
}

export function updateWhatWeDoSuccess(whatWeDo: any[], type: string) {
  return {
    type: '@whatWeDo/UPDATE_WHAT_WE_DO_SUCCESS',
    payload: { whatWeDo, type }
  }
}

export function updateWhatWeDoFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/UPDATE_WHAT_WE_DO_FAILURE',
    payload: { type, message }
  }
}
