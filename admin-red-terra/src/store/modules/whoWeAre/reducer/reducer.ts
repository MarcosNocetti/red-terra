import produce from 'immer'
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType'
import { IActionSaga } from '../../../../interfaces/actionSaga'
import {
  getWhoWeAre,
  updateWhoWeAre,
  createClientReview,
  getClientReview,
  createRnd,
  getRdn,
  createTeam,
  getTeam,
  updateClientReview,
  updateRnd,
  updateTeam,
  deleteRdn,
  deleteClientReview,
  deleteTeam
} from '.'
import { IBaseInitialState } from '../../../../interfaces/initialState'

export interface IInitialState extends IBaseInitialState {
  whoWeAre: any[] | null,
  clientReview: any[] | null,
  rdn: any[] | null,
  team: any[] | null,
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  whoWeAre: null,
  clientReview: null,
  rdn: null,
  team: null
}

export function whoWeAre(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {

      case 'GET_WHO_WE_ARE': {
        draft = getWhoWeAre(action, draft)
        break
      } 
      case 'UPDATE_WHO_WE_ARE' : {
        draft = updateWhoWeAre(action, draft)
        break
      }

      case 'CREATE_CLIENT_REVIEW' : {
        draft = createClientReview(action, draft)
        break
      }
      case 'GET_CLIENT_REVIEW' : {
        draft = getClientReview(action, draft)
        break
      }
      case 'UPDATE_CLIENT_REVIEW' : {
        draft = updateClientReview(action, draft)
        break
      }
      case 'DELETE_CLIENT_REVIEW' : {
        draft = deleteClientReview(action, draft)
        break
      }

      case 'CREATE_RND' : {
        draft = createRnd(action, draft)
        break
      }
      case 'GET_RDN' : {
        draft = getRdn(action, draft)
        break
      }
      case 'UPDATE_RDN' : {
        draft = updateRnd(action, draft)
        break
      }
      case 'DELETE_RDN' : {
        draft = deleteRdn(action, draft)
        break
      }

      case 'CREATE_TEAM' : {
        draft = createTeam(action, draft)
        break
      }
      case 'GET_TEAM' : {
        draft = getTeam(action, draft)
        break
      }
      case 'UPDATE_TEAM' : {
        draft = updateTeam(action, draft)
        break
      }
      case 'DELETE_TEAM' : {
        draft = deleteTeam(action, draft)
        break
      }

      default:
    }

    return draft
  })
}
