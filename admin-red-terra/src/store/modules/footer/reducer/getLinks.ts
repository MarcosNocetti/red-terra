import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getFooterLinks(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@footer/GET_FOOTER_LINKS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@footer/GET_FOOTER_LINKS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@footer/GET_FOOTER_LINKS_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
