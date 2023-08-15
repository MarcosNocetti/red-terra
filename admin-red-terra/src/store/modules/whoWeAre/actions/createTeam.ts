export function createTeamRequest(
  team: any,
) {
  return {
    type: '@whoWeAre/CREATE_TEAM_REQUEST',
    payload: { team }
  }
}

export function createTeamSuccess(type: string) {
  return {
    type: '@whoWeAre/CREATE_TEAM_SUCCESS',
    payload: { type }
  }
}

export function createTeamFailure(type: string, message: string) {
  return {
    type: '@whoWeAre/CREATE_TEAM_FAILURE',
    payload: { type, message }
  }
}
