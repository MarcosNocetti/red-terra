import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateContact(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@contacts/UPDATE_CONTACT_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@contacts/UPDATE_CONTACT_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@contacts/UPDATE_CONTACT_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
