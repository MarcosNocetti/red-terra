import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import {
  footerPost,
  getFooter,
  getFooterLinks,
  updateLinks
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  footer: any[] | null,
  footerLinks: any[] | null
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  footer: null,
  footerLinks: null
}

export function footer(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'FOOTER': {
        draft = footerPost(action, draft)
        break
      }

      case 'GET_FOOTER': {
        draft = getFooter(action, draft)
        break
      }

      case 'GET_FOOTER_LINKS': {
        draft = getFooterLinks(action, draft)
        break
      }

      case 'UPDATE_LINKS': {
        draft = updateLinks(action, draft)
        break
      }

      default:
    }

    return draft
  })
}
