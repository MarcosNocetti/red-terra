import produce from 'immer';
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType';
import { IActionSaga } from '../../../../interfaces/actionSaga';
import {
  createAward,
  getAwards,
  resetBaseState,
  resetInitialState,
  updateAward,
  deleteAward
} from '.';
import { IBaseInitialState } from '../../../../interfaces/initialState';

export interface IInitialState extends IBaseInitialState {
  awards: any[] | null;
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  awards: null,
};

export function awards(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'GET_AWARDS': {
        draft = getAwards(action, draft);
        break;
      }

      case 'CREATE_AWARD': {
        draft = createAward(action, draft);
        break;
      }

      case 'UPDATE_AWARD': {
        draft = updateAward(action, draft);
        break;
      }
      case 'DELETE_AWARD': {
        draft = deleteAward(action, draft);
        break;
      }

      case 'RESET_BASE_STATE': {
        draft = resetBaseState(action, draft);
        break;
      }

      case 'RESET_INITIAL_STATE': {
        draft = resetInitialState(action, draft, INITIAL_STATE);
        break;
      }

      default:
    }

    return draft;
  });
}
