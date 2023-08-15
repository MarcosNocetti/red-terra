export function deleteTeamRequest(
  id: string,
  team: any
) {
  return {
    type: '@whoWeAre/DELETE_TEAM_REQUEST',
    payload: { id, team }
  }
}

export function deleteTeamSuccess(team: any[], type: string) {
  return {
    type: '@whoWeAre/DELETE_TEAM_SUCCESS',
    payload: { team, type }
  }
}

export function deleteTeamFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/DELETE_TEAM_FAILURE',
    payload: { type, message }
  }
}
