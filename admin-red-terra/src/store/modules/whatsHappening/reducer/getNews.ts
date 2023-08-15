import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getNews(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatsHappening/GET_NEWS_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }
    case '@whatsHappening/GET_NEWS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }
    case '@whatsHappening/GET_NEWS_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
