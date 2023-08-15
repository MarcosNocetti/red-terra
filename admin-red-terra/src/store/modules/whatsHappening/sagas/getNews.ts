import { call, put } from 'redux-saga/effects'
import { getNewsSuccess, getNewsFailure } from '../actions'
import api from '../../../../services/api'

export function* getNews(data: any): any {
  try {
    const { data } = yield call(api.get, `/news`)

    yield put(getNewsSuccess(data.data, 'GET_NEWS'))
  } catch (error: any) {
    yield put(getNewsFailure('GET_NEWS', error?.response?.data?.message))
  }
}
