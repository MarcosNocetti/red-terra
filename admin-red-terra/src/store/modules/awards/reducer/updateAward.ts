import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IInitialState } from '.';
import { errorState, requestState, successState } from '../../../constants';

export function updateAward(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@awards/UPDATE_AWARD_REQUEST': {
      draft = { ...draft, ...requestState };
      break;
    }

    case '@awards/UPDATE_AWARD_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload };
      break;
    }

    case '@awards/UPDATE_AWARD_FAILURE': {
      draft = { ...draft, ...errorState };
      break;
    }

    default:
  }

  return draft;
}
