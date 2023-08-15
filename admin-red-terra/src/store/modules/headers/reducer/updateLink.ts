import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateLink(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@headers/UPDATE_LINK_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@headers/UPDATE_LINK_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@headers/UPDATE_LINK_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
