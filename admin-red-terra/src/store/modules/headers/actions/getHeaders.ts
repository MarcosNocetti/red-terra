export function getHeadersRequest() {
  return {
    type: '@headers/GET_HEADERS_REQUEST'
  }
}

export function getHeadersSuccess(headers: { headers: any[]; links: any[] }) {
  return {
    type: '@headers/GET_HEADERS_SUCCESS',
    payload: { headers }
  }
}

export function getHeadersFailure() {
  return {
    type: '@headers/GET_HEADERS_FAILURE'
  }
}
