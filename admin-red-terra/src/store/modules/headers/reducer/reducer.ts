import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import {
  getHeaders,
  resetBaseState,
  resetInitialState,
  updateHeader,
  updateLink
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  headers: any[] | null
  links: any[] | null
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  headers: null,
  links: null
}

export function headers(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_HEADERS': {
        draft = getHeaders(action, draft)
        break
      }

      case 'UPDATE_HEADER': {
        draft = updateHeader(action, draft)
        break
      }

      case 'UPDATE_LINK': {
        draft = updateLink(action, draft)
        break
      }

      case 'RESET_BASE_STATE': {
        draft = resetBaseState(action, draft)
        break
      }

      case 'RESET_INITIAL_STATE': {
        draft = resetInitialState(action, draft, INITIAL_STATE)
        break
      }

      default:
    }

    return draft
  })
}
