import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function signUp(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/SIGN_UP_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/SIGN_UP_SUCCESS': {
      draft = { ...draft, ...successState }
      break
    }

    case '@auth/SIGN_UP_FAILURE': {
      draft = { ...draft, ...errorState }
      draft.message = action.payload.error
      break
    }

    default:
  }

  return draft
}
