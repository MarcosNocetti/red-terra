import { call, put } from 'redux-saga/effects'
import { createNewsSuccess, createNewsFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createNews(data: any): any {
  const { payload } = data
  try {
    const { data } = yield call(api.post, '/news', payload.news)

    yield put(createNewsSuccess(data.data, 'CREATE_NEWS'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createNewsFailure('CREATE_NEWS', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
