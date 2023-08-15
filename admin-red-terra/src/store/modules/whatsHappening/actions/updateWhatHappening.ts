export function updateWhatsHappeningRequest(
  updateWhatsHappening: any,
  id: string
) {
  return {
    type: '@whatsHappening/UPDATE_WHATS_HAPPENING_REQUEST',
    payload: { updateWhatsHappening, id }
  }
}

export function updateWhatsHappeningSuccess(whatsHappening: any[], type: string) {
  return {
    type: '@whatsHappening/UPDATE_WHATS_HAPPENING_SUCCESS',
    payload: { whatsHappening, type }
  }
}

export function updateWhatsHappeningFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/UPDATE_WHATS_HAPPENING_FAILURE',
    payload: { type, message }
  }
}
