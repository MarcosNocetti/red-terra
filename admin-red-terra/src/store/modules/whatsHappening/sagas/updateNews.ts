import { call, put } from 'redux-saga/effects'
import { updateNewsSuccess, updateNewsFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateNews(data: any): any {
  const { payload } = data
  const { updateNews, id } = payload;

  try {
    const { data } = yield call(api.patch, `/news/${id}`, updateNews)

    yield put(updateNewsSuccess('UPDATE_NEWS'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateNewsFailure('UPDATE_NEWS', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
