import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getContacts(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@contacts/GET_CONTACTS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@contacts/GET_CONTACTS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@contacts/GET_CONTACTS_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
