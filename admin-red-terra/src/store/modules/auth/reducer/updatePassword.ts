import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updatePassword(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/UPDATE_PASSWORD_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/UPDATE_PASSWORD_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@auth/UPDATE_PASSWORD_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
