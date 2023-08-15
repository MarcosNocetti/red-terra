export function updateLinksRequest(
  updateLinks: any,
  id: string
) {
  return {
    type: '@footer/UPDATE_LINKS_REQUEST',
    payload: { updateLinks, id }
  }
}

export function updateLinksSuccess(type: string) {
  return {
    type: '@footer/UPDATE_LINKS_SUCCESS',
    payload: { type }
  }
}

export function updateLinksFailure(type: string, message: string) {
  return {
    type: '@footer/UPDATE_LINKS_FAILURE',
    payload: { type, message }
  }
}
