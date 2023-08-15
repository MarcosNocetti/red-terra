import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateUser(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@users/UPDATE_USER_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@users/UPDATE_USER_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@users/UPDATE_USER_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
