import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getWhoWeAre(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whoWeAre/GET_WHO_WE_ARE_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@whoWeAre/GET_WHO_WE_ARE_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@whoWeAre/GET_WHO_WE_ARE_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
