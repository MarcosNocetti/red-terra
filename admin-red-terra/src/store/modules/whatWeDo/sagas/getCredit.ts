import { call, put } from 'redux-saga/effects'
import { getCreditSuccess, getCreditFailure } from '../actions'
import api from '../../../../services/api'

export function* getCredit(data: any): any {

  try {
    const { data } = yield call(api.get, `/credits`)

    yield put(getCreditSuccess(data.data, 'GET_CREDIT'))
  } catch (error: any) {
    yield put(getCreditFailure('GET_CREDIT', error?.response?.data?.message))
  }
}
