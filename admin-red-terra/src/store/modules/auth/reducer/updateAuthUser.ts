import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateAuthUser(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/UPDATE_AUTH_USER_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/UPDATE_AUTH_USER_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@auth/UPDATE_AUTH_USER_FAILURE': {
      draft = { ...draft, ...errorState }
      draft.message = action.payload.error
      break
    }

    default:
  }

  return draft
}
