import { IActionSaga } from '../../../../interfaces/actionSaga';
import { IInitialState } from '.';
import { baseInitialState } from '../../../constants/baseInitialState';

export function resetBaseState(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@awards/RESET_BASE_STATE_REQUEST': {
      draft = { ...draft, ...baseInitialState };
      break;
    }

    case '@awards/RESET_BASE_STATE_SUCCESS': {
      draft = { ...draft, ...baseInitialState };
      break;
    }

    case '@awards/RESET_BASE_STATE_FAILURE': {
      draft = { ...draft, ...baseInitialState };
      break;
    }

    default:
  }

  return draft;
}
