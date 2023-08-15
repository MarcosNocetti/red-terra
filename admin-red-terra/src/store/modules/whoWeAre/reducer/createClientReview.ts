import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function createClientReview(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whoWeAre/CREATE_CLIENT_REVIEW_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whoWeAre/CREATE_CLIENT_REVIEW_SUCCESS': {
      draft = {...draft, ...successState, ...action.payload }
      break
    }

    case '@whoWeAre/CREATE_CLIENT_REVIEW_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
