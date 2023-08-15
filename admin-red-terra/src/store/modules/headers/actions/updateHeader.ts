export function updateHeaderRequest(
  headers: any[],
  updatedHeaderData: any,
  id: string
) {
  return {
    type: '@headers/UPDATE_HEADER_REQUEST',
    payload: { headers, updatedHeaderData, id }
  }
}

export function updateHeaderSuccess(headers: any[], message: string) {
  return {
    type: '@headers/UPDATE_HEADER_SUCCESS',
    payload: { headers, message }
  }
}

export function updateHeaderFailure(error: string) {
  return {
    type: '@headers/UPDATE_HEADER_FAILURE',
    payload: { error }
  }
}
