import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getRdn(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whoWeAre/GET_RDN_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@whoWeAre/GET_RDN_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@whoWeAre/GET_RDN_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
