import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'

export function resetInitialState(
  action: IActionSaga,
  draft: IInitialState,
  initialState: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/RESET_INITIAL_STATE_REQUEST': {
      draft = initialState
      break
    }

    case '@auth/RESET_INITIAL_STATE_SUCCESS': {
      draft = initialState
      break
    }

    case '@auth/RESET_INITIAL_STATE_FAILURE': {
      draft = initialState
      break
    }

    default:
  }

  return draft
}
