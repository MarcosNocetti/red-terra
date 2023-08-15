import { IActionSaga } from '../../../../interfaces/actionSaga'
import { errorState, requestState, successState } from '../../../constants'
import { IInitialState } from './reducer'

export function popup(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@popup/POP_UP_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@popup/POP_UP_SUCCESS': {
      draft = { ...draft, ...action.payload, ...successState }
      break
    }

    case '@popup/POP_UP_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
