export function createNewsRequest(
  news: any,
) {
  return {
    type: '@whatsHappening/CREATE_NEWS_REQUEST',
    payload: { news }
  }
}

export function createNewsSuccess(whatsHappening: any[], type: string) {
  return {
    type: '@whatsHappening/CREATE_NEWS_SUCCESS',
    payload: { whatsHappening, type }
  }
}

export function createNewsFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/CREATE_NEWS_FAILURE',
    payload: { type, message }
  }
}
