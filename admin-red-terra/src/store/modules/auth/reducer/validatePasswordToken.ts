import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function validatePasswordToken(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/VALIDATE_PASSWORD_TOKEN_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@auth/VALIDATE_PASSWORD_TOKEN_SUCCESS': {
      draft = { ...draft, ...successState }
      break
    }

    case '@auth/VALIDATE_PASSWORD_TOKEN_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
