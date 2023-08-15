import { call, put } from 'redux-saga/effects'
import { getFooterSuccess, getFooterFailure } from '../actions'
import api from '../../../../services/api'

export function* getFooter(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.get, `/footer/${payload.language}`)

    yield put(getFooterSuccess(data.data, 'GET_FOOTER'))
  } catch (error: any) {
    yield put(getFooterFailure('GET_FOOTER', error?.response?.data?.message))
  }
}
