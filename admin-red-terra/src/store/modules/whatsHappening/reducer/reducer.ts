import produce from "immer";
import { getReduxSagaActionType } from "../../../../helpers/getReduxSagaActionType";
import { IActionSaga } from "../../../../interfaces/actionSaga";
import {
  getWhatsHappening,
  updateWhatHappening,
  createNews,
  getNews,
  updateNews,
  deleteNews,
  getNewsByRelation,
} from ".";
import { IBaseInitialState } from "../../../../interfaces/initialState";

export interface IInitialState extends IBaseInitialState {
  whatsHappening: any[] | null;
  news: any[] | null;
}

const INITIAL_STATE: IInitialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
  whatsHappening: null,
  news: null,
};

export function whatsHappening(state = INITIAL_STATE, action: IActionSaga) {
  return produce(state, (draft: IInitialState) => {
    switch (getReduxSagaActionType(action.type)) {
      case "GET_HAPPENING": {
        draft = getWhatsHappening(action, draft);
        break;
      }

      case "UPDATE_WHATS_HAPPENING": {
        draft = updateWhatHappening(action, draft);
        break;
      }

      case "CREATE_NEWS": {
        draft = createNews(action, draft);
        break;
      }

      case "GET_NEWS": {
        draft = getNews(action, draft);
        break;
      }

      case "UPDATE_NEWS": {
        draft = updateNews(action, draft);
        break;
      }

      case "DELETE_NEWS": {
        draft = deleteNews(action, draft);
        break;
      }

      case "GET_NEWS_BY_RELATION": {
        draft = getNewsByRelation(action, draft);
        break;
      }

      default:
    }

    return draft;
  });
}
