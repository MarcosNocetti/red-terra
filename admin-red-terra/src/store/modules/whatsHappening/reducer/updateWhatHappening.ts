import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateWhatHappening(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatsHappening/UPDATE_WHATS_HAPPENING_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whatsHappening/UPDATE_WHATS_HAPPENING_SUCCESS': {
      draft = {...draft, ...successState, ...action.payload }
      break
    }

    case '@whatsHappening/UPDATE_WHATS_HAPPENING_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
