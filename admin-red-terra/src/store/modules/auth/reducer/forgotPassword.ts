import { IInitialState } from '.'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import { errorState, requestState, successState } from '../../../constants'

export function forgotPassword(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/FORGOT_PASSWORD_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/FORGOT_PASSWORD_SUCCESS': {
      draft = { ...draft, ...successState }
      break
    }

    case '@auth/FORGOT_PASSWORD_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
