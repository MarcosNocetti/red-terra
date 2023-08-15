import { call, put } from 'redux-saga/effects'
import { deleteNewsSuccess, deleteNewsFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteNews(data: any): any {
  const { payload } = data
  const { id, news } = payload;

  try {
    const { data } = yield call(api.delete, `/news/${id}`)

    const putNews = news.filter((item: any) => item.id !== id);

    yield put(deleteNewsSuccess(putNews, 'DELETE_NEWS'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteNewsFailure('DELETE_NEWS', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
