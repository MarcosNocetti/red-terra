import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getHome(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@home/GET_HOME_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@home/GET_HOME_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@home/GET_HOME_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
