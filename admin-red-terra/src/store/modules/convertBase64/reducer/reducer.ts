import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import {
  statusBase64,
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  base64: any[] | null
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  base64: null
}

export function base64(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'STATUS_BASE64': {
        draft = statusBase64(action, draft)
        break
      }

      default:
    }

    return draft
  })
}
