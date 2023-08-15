export function updateHomeRequest(videoUrl: string) {
  return {
    type: '@home/UPDATE_HOME_REQUEST',
    payload: { videoUrl }
  }
}

export function updateHomeSuccess(home: any, message: string) {
  return {
    type: '@home/UPDATE_HOME_SUCCESS',
    payload: { home, message }
  }
}

export function updateHomeFailure(error: string) {
  return {
    type: '@home/UPDATE_HOME_FAILURE',
    payload: { error }
  }
}
