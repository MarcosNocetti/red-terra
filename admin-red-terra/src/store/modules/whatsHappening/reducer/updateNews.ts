import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function updateNews(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatsHappening/UPDATE_NEWS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whatsHappening/UPDATE_NEWS_SUCCESS': {
      draft = {...draft, ...successState, ...action.payload }
      break
    }

    case '@whatsHappening/UPDATE_NEWS_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
