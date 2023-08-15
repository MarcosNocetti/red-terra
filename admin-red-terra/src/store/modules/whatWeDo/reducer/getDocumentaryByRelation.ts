import { IActionSaga } from '../../../../interfaces/actionSaga'
import { IInitialState } from '.'
import { errorState, requestState, successState } from '../../../constants'

export function getDocumentaryByRelation(
  action: IActionSaga,
  draft: IInitialState
): IInitialState {
  switch (action.type) {
    case '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_REQUEST': {
      draft = { ...draft, ...requestState }
      break
    }

    case '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_SUCCESS': {
      draft = { ...draft, ...successState, ...action.payload }
      break
    }

    case '@whatWeDo/GET_DOCUMENTARY_BY_RELATION_FAILURE': {
      draft = { ...draft, ...errorState, ...action.payload }
      break
    }

    default:
  }

  return draft
}
