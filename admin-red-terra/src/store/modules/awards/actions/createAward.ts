export function createAwardRequest(payload: {
  language: string;
  name: string;
  imageUrl: string;
  documentaryId?: string;
  whoWeAreId?: string;
}) {
  return {
    type: '@awards/CREATE_AWARD_REQUEST',
    payload,
  };
}

export function createAwardSuccess(type: string) {
  return {
    type: '@awards/CREATE_AWARD_SUCCESS',
    payload: { type },
  };
}

export function createAwardFailure(type: string, message: string) {
  return {
    type: '@awards/CREATE_AWARD_FAILURE',
    payload: { type, message },
  };
}
