import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateRnd(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whoWeAre/UPDATE_RDN_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whoWeAre/UPDATE_RDN_SUCCESS': {
      draft = {...draft, ...successState, ...action.payload }
      break
    }

    case '@whoWeAre/UPDATE_RDN_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
