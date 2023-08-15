export function getNewsByRelationRequest(id: string) {
  return {
    type: "@whatsHappening/GET_NEWS_BY_RELATION_REQUEST",
    payload: {
      id,
    },
  };
}

export function getNewsByRelationSuccess(newsRelation: any[], type: string) {
  return {
    type: "@whatsHappening/GET_NEWS_BY_RELATION_SUCCESS",
    payload: { newsRelation, type },
  };
}

export function getNewsByRelationFailure(type: string, message: string) {
  return {
    type: "@whatsHappening/GET_NEWS_BY_RELATION_FAILURE",
  };
}
