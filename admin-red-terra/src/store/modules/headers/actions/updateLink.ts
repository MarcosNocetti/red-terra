export function updateLinkRequest(
  links: any[],
  updatedLinkData: any,
  id: string
) {
  return {
    type: '@headers/UPDATE_LINK_REQUEST',
    payload: { links, updatedLinkData, id }
  }
}

export function updateLinkSuccess(links: any[], message: string) {
  return {
    type: '@headers/UPDATE_LINK_SUCCESS',
    payload: { links, message }
  }
}

export function updateLinkFailure(error: string) {
  return {
    type: '@headers/UPDATE_LINK_FAILURE',
    payload: { error }
  }
}
