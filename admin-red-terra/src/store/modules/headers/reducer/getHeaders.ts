import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getHeaders(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@headers/GET_HEADERS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@headers/GET_HEADERS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload.headers, ...action.payload.links }
      break
    }

    case '@headers/GET_HEADERS_FAILURE': {
      draft = { ...draft, ...errorState }
      break
    }

    default:
  }

  return draft
}
