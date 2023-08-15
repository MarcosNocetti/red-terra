export function getHomeRequest() {
  return {
    type: '@home/GET_HOME_REQUEST'
  }
}

export function getHomeSuccess(home: any) {
  return {
    type: '@home/GET_HOME_SUCCESS',
    payload: { home }
  }
}

export function getHomeFailure() {
  return {
    type: '@home/GET_HOME_FAILURE'
  }
}
