export function updateClientReviewRequest(
  updateClientReview: any,
  id: string
) {
  return {
    type: '@whoWeAre/UPDATE_CLIENT_REVIEW_REQUEST',
    payload: { updateClientReview, id }
  }
}

export function updateClientReviewSuccess(type: string) {
  return {
    type: '@whoWeAre/UPDATE_CLIENT_REVIEW_SUCCESS',
    payload: { type }
  }
}

export function updateClientReviewFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/UPDATE_CLIENT_REVIEW_FAILURE',
    payload: { type, message }
  }
}
