import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateHome(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@home/UPDATE_HOME_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@home/UPDATE_HOME_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@home/UPDATE_HOME_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
