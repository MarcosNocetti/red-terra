import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function signOut(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/SIGN_OUT_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/SIGN_OUT_SUCCESS': {
      draft = { ...draft, ...successState, signed: false, userData: null }
      break
    }

    case '@auth/SIGN_OUT_FAILURE': {
      draft = { ...draft, ...errorState }
      draft.message = action.payload.error
      break
    }

    default:
  }

  return draft
}
