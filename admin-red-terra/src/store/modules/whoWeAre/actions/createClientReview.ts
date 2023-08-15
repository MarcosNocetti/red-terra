export function createClientReviewRequest(
  clientReview: any,
) {
  return {
    type: '@whoWeAre/CREATE_CLIENT_REVIEW_REQUEST',
    payload: { clientReview }
  }
}

export function createClientReviewSuccess(type: string) {
  return {
    type: '@whoWeAre/CREATE_CLIENT_REVIEW_SUCCESS',
    payload: { type }
  }
}

export function createClientReviewFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/CREATE_CLIENT_REVIEW_FAILURE',
    payload: { type, message }
  }
}
