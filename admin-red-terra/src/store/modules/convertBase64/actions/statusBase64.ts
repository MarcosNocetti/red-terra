export function statusBase64Request(
  base64: any
) {
  return {
    type: '@base64/STATUS_BASE64_REQUEST',
    payload: { base64 }
  }
}

export function statusBase64Success(base64: any[], type: string) {
  return {
    type: '@base64/STATUS_BASE64_SUCCESS',
    payload: { base64, type }
  }
}

export function statusBase64Failure(type: string, message: string) {
  return {
    type: '@base64/STATUS_BASE64_FAILURE',
  }
}
