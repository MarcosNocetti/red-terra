export function getNewsRequest( ) {
  return {
    type: '@whatsHappening/GET_NEWS_REQUEST',
  }
}

export function getNewsSuccess(news: any[], type: string) {
  return {
    type: '@whatsHappening/GET_NEWS_SUCCESS',
    payload: { news, type }
  }
}

export function getNewsFailure(type: string, message: string) {
  return {
    type: '@whatsHappening/GET_NEWS_FAILURE',
  }
}
