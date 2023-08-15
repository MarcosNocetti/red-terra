import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateHeader(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@headers/UPDATE_HEADER_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@headers/UPDATE_HEADER_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@headers/UPDATE_HEADER_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
