export function getWhatsHappeningRequest(
  language: string
) {
  return {
    type: '@whatsHappening/GET_HAPPENING_REQUEST',
    payload: { language }
  }
}

export function getWhatsHappeningSuccess(whatsHappening: any[], type: string) {
  return {
    type: '@whatsHappening/GET_HAPPENING_SUCCESS',
    payload: { whatsHappening, type }
  }
}

export function getWhatsHappeningFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/GET_HAPPENING_FAILURE',
  }
}
