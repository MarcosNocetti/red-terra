import { call, put } from "redux-saga/effects";
import { getNewsByRelationSuccess, getNewsByRelationFailure } from "../actions";
import api from "../../../../services/api";

export function* getNewsByRelation(data: any): any {
  const { payload } = data;
  const { id } = payload;
  try {
    const { data } = yield call(api.get, `/news/whatsHappening/${id}`);

    yield put(getNewsByRelationSuccess(data.data[0], "GET_NEWS_BY_RELATION"));
  } catch (error: any) {
    yield put(
      getNewsByRelationFailure(
        "GET_NEWS_BY_RELATION",
        error?.response?.data?.message
      )
    );
  }
}
