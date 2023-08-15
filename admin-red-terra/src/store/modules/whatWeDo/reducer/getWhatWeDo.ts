import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getWhatWeDo(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatWeDo/GET_WHAT_WE_DO_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whatWeDo/GET_WHAT_WE_DO_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@whatWeDo/GET_WHAT_WE_DO_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
