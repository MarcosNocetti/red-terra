import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IUser } from '../../../../interfaces/user'
import {
  createUser,
  getUsers,
  resetBaseState,
  resetInitialState,
  updateUser,
  deleteUser
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  users: IUser[] | null
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  users: null
}

export function users(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_USERS': {
        draft = getUsers(action, draft)
        break
      }

      case 'CREATE_USER': {
        draft = createUser(action, draft)
        break
      }

      case 'UPDATE_USER': {
        draft = updateUser(action, draft)
        break
      }
      case 'DELETE_USER': {
        draft = deleteUser(action, draft)
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
