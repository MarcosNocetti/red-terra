export function deleteAwardRequest(
  id: string,
  award: any
) {
  return {
    type: '@awards/DELETE_AWARD_REQUEST',
    payload: { id, award }
  }
}

export function deleteAwardSuccess(awards: any[], type: string) {
  return {
    type: '@awards/DELETE_AWARD_SUCCESS',
    payload: { awards, type }
  }
}

export function deleteAwardFailure(type: string, message: string) {
  return {
    type: '@awards/DELETE_AWARD_FAILURE',
    payload: { type, message }
  }
}
