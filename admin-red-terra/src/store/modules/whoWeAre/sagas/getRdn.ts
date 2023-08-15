import { call, put } from 'redux-saga/effects'
import { getRdnSuccess, getRdnFailure } from '../actions'
import api from '../../../../services/api'

export function* getRdn(data: any): any {
  try {
    const { data } = yield call(api.get, `/rdn`)

    yield put(getRdnSuccess(data.data, 'GET_RDN'))
  } catch (error: any) {
    yield put(getRdnFailure('GET_RDN', error?.response?.data?.message))
  }
}
