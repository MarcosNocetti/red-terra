export function getClientReviewRequest( ) {
  return {
    type: '@whoWeAre/GET_CLIENT_REVIEW_REQUEST',
  }
}

export function getClientReviewSuccess(clientReview: any[], type: string) {
  return {
    type: '@whoWeAre/GET_CLIENT_REVIEW_SUCCESS',
    payload: { clientReview, type }
  }
}

export function getClientReviewFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/GET_CLIENT_REVIEW_FAILURE',
  }
}
