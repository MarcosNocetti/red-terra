export function updateNewsRequest(
  updateNews: any,
  id: string
) {
  return {
    type: '@whatsHappening/UPDATE_NEWS_REQUEST',
    payload: { updateNews, id }
  }
}

export function updateNewsSuccess(type: string) {
  return {
    type: '@whatsHappening/UPDATE_NEWS_SUCCESS',
    payload: { type }
  }
}

export function updateNewsFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/UPDATE_NEWS_FAILURE',
    payload: { type, message }
  }
}
