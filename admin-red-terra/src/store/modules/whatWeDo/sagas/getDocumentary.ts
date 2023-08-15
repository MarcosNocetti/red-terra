import { call, put } from 'redux-saga/effects'
import { getDocumentarySuccess, getDocumentaryFailure } from '../actions'
import api from '../../../../services/api'

export function* getDocumentary(data: any): any {
  try {
    const { data } = yield call(api.get, `/documentary`)

    yield put(getDocumentarySuccess(data.data, 'GET_DOCUMENTARY'))
  } catch (error: any) {
    yield put(getDocumentaryFailure('GET_DOCUMENTARY', error?.response?.data?.message))
  }
}
