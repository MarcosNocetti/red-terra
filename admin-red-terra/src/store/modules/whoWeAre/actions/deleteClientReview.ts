export function deleteClientReviewRequest(
  id: string,
  clientReview: any
) {
  return {
    type: '@whoWeAre/DELETE_CLIENT_REVIEW_REQUEST',
    payload: { id, clientReview }
  }
}

export function deleteClientReviewSuccess(clientReview: any[], type: string) {
  return {
    type: '@whoWeAre/DELETE_CLIENT_REVIEW_SUCCESS',
    payload: { clientReview, type }
  }
}

export function deleteClientReviewFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/DELETE_CLIENT_REVIEW_FAILURE',
    payload: { type, message }
  }
}
