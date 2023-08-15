import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IInitialState } from '.';
import { errorState, requestState, successState } from '../../../constants';

export function createAward(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@awards/CREATE_AWARD_REQUEST': {
      draft = { ...draft, ...requestState };
      break;
    }

    case '@awards/CREATE_AWARD_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload };
      break;
    }

    case '@awards/CREATE_AWARD_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload };
      break;
    }

    default:
  }

  return draft;
}
