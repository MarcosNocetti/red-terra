import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IContact } from '../../../../interfaces/contact'
import {
  getContacts,
  resetBaseState,
  resetInitialState,
  updateContact
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  contacts: IContact[] | null
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  contacts: null
}

export function contacts(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_CONTACTS': {
        draft = getContacts(action, draft)
        break
      }

      case 'UPDATE_CONTACT': {
        draft = updateContact(action, draft)
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
