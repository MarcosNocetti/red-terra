import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function deleteUser(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@users/DELETE_USER_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@users/DELETE_USER_SUCCESS': {
      draft = {...draft, ...successState, ...action.payload }
      break
    }

    case '@users/DELETE_USER_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
