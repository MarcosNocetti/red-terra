export function deleteNewsRequest(
  id: string,
  news: any
) {
  return {
    type: '@whatsHappening/DELETE_NEWS_REQUEST',
    payload: { id, news }
  }
}

export function deleteNewsSuccess(news: any[], type: string) {
  return {
    type: '@whatsHappening/DELETE_NEWS_SUCCESS',
    payload: { news, type }
  }
}

export function deleteNewsFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/DELETE_NEWS_FAILURE',
    payload: { type, message }
  }
}
