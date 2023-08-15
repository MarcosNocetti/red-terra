import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function statusBase64(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@base64/STATUS_BASE64_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@base64/STATUS_BASE64_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@base64/STATUS_BASE64R_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
