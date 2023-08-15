import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getUsers(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@users/GET_USERS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@users/GET_USERS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@users/GET_USERS_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
