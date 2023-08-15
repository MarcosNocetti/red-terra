import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IInitialState } from '.';
import { errorState, requestState, successState } from '../../../constants';

export function signIn(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST': {
      draft = { ...draft, ...requestState };
      break;
    }
    case '@auth/REAUTH_REQUEST': {
      draft = { ...draft, ...requestState };
      break;
    }

    case '@auth/SIGN_IN_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload, signed: true };
      break;
    }
    case '@auth/REAUTH_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload, signed: true };
      break;
    }

    case '@auth/SIGN_IN_FAILURE': {
      draft = { ...draft, ...errorState };
      draft.message = action.payload.error;
      break;
    }
    case '@auth/REAUTH_FAILURE': {
      draft = { ...draft, ...successState, signed: false };
      draft.message = action.payload.error;
      break;
    }

    default:
  }

  return draft;
}
