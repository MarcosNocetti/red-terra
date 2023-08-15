import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import { popup, resetBaseState, resetInitialState } from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'
import { AlertColor } from '@mui/material'

export interface IInitialState extends IBaseInitialState {
  text: string | null
  type: AlertColor | string
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  text: '',
  type: ''
}

export function popupReducer(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'POP_UP': {
        draft = popup(action, draft)
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
