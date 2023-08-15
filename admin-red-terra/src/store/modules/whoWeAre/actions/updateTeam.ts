export function updateTeamRequest(
  updateTeam: any,
  id: string
) {
  return {
    type: '@whoWeAre/UPDATE_TEAM_REQUEST',
    payload: { updateTeam, id }
  }
}

export function updateTeamSuccess(type: string) {
  return {
    type: '@whoWeAre/UPDATE_TEAM_SUCCESS',
    payload: { type }
  }
}

export function updateTeamFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/UPDATE_TEAM_FAILURE',
    payload: { type, message }
  }
}
