import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateCredit(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatWeDo/UPDATE_CREDIT_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whatWeDo/UPDATE_CREDIT_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@whatWeDo/UPDATE_CREDIT_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
