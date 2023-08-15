import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IInitialState } from '.';
import { errorState, requestState, successState } from '../../../constants';

export function getAwards(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@awards/GET_AWARDS_REQUEST': {
      draft = { ...draft, ...requestState };
      break;
    }

    case '@awards/GET_AWARDS_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload };
      break;
    }

    case '@awards/GET_AWARDS_FAILURE': {
      draft = { ...draft, ...errorState };
      break;
    }

    default:
  }

  return draft;
}
