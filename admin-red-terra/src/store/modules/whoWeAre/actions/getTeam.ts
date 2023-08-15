export function getTeamRequest( ) {
  return {
    type: '@whoWeAre/GET_TEAM_REQUEST',
  }
}

export function getTeamSuccess(team: any[], type: string) {
  return {
    type: '@whoWeAre/GET_TEAM_SUCCESS',
    payload: { team, type }
  }
}

export function getTeamFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/GET_TEAM_FAILURE',
  }
}
