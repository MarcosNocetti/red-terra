import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import { getHome, resetBaseState, resetInitialState, updateHome } from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  home?: string
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  home: ''
}

export function home(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_HOME': {
        draft = getHome(action, draft)
        break
      }

      case 'UPDATE_HOME': {
        draft = updateHome(action, draft)
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
