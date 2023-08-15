import produce from 'immer';
import { getReduxSagaActionType } from '../../../../helpers/getReduxSagaActionType';
import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IBaseInitialState } from '../../../../interfaces/initialState';
import { IUser } from '../../../../interfaces/user';
import { baseInitialState } from '../../../constants/baseInitialState';
import {
  forgotPassword,
  resetBaseState,
  resetInitialState,
  signIn,
  signOut,
  signUp,
  updateAuthUser,
  updatePassword,
  validatePasswordToken,
} from '.';

export interface IInitialState extends IBaseInitialState {
  signed: boolean;
  userData: IUser | null;
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  signed: false,
  userData: null,
};

export function auth(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case 'FORGOT_PASSWORD': {
        draft = forgotPassword(action, draft);
        break;
      }

      case 'UPDATE_PASSWORD': {
        draft = updatePassword(action, draft);
        break;
      }

      case 'UPDATE_AUTH_USER': {
        draft = updateAuthUser(action, draft);
        break;
      }

      case 'SIGN_UP': {
        draft = signUp(action, draft);
        break;
      }

      case 'REAUTH': {
        draft = signIn(action, draft);
        break;
      }

      case 'SIGN_IN': {
        draft = signIn(action, draft);
        break;
      }

      case 'SIGN_OUT': {
        draft = signOut(action, draft);
        break;
      }

      case 'VALIDATE_PASSWORD_TOKEN': {
        draft = validatePasswordToken(action, draft);
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
