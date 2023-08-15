import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import {
  getWhatWeDo,
  createCredit,
  updateWhatWeDo,
  getCredit,
  updateCredit,
  createDocumentary,
  getDocumentary,
  updateDocumentary,
  deleteCredit,
  deleteDocumentary,
  getDocumentaryByRelation
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  whatWeDo: any[] | null,
  credit: any[] | null,
  documentary: any[] | null,
  documentaryRelation: any[] | null,
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  whatWeDo: null,
  credit: null,
  documentary: null,
  documentaryRelation: null
}

export function whatWeDo(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_WHAT_WE_DO' : {
        draft = getWhatWeDo(action, draft)
        break 
      }
      case 'UPDATE_WHAT_WE_DO': {
        draft = updateWhatWeDo(action, draft)
        break
      }

      case 'CREATE_CREDIT': {
        draft = createCredit(action, draft)
        break
      }
      case 'GET_CREDIT': {
        draft = getCredit(action, draft)
        break
      }
      case 'UPDATE_CREDIT': {
        draft = updateCredit(action, draft)
        break
      }
      case 'DELETE_CREDIT': {
        draft = deleteCredit(action, draft)
        break
      }

      case 'CREATE_DOCUMENTARY': {
        draft = createDocumentary(action, draft)
        break
      }
      case 'GET_DOCUMENTARY': {
        draft = getDocumentary(action, draft)
        break
      }
      case 'UPDATE_DOCUMENTARY': {
        draft = updateDocumentary(action, draft)
        break
      }
      case 'DELETE_DOCUMENTARY': {
        draft = deleteDocumentary(action, draft)
        break
      }

      case 'GET_DOCUMENTARY_BY_RELATION': {
        draft = getDocumentaryByRelation(action, draft)
        break
      }
      default:
    }

    return draft
  })
}
