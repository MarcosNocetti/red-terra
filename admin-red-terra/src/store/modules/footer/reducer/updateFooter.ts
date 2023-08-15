import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function footerPost(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@footer/FOOTER_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@footer/FOOTER_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@footer/FOOTER_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
