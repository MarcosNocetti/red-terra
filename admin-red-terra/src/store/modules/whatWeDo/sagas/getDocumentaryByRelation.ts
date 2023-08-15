import { call, put } from 'redux-saga/effects'
import { getDocumentaryByRelationSuccess, getDocumentaryByRelationFailure } from '../actions'
import api from '../../../../services/api'

export function* getDocumentaryByRelation(data: any): any {
  const { payload } = data
  const { id } = payload;
  try {
    const { data } = yield call(api.get, `/documentary/${id}`)

    yield put(getDocumentaryByRelationSuccess(data.data, 'GET_DOCUMENTARY_BY_RELATION'))
  } catch (error: any) {
    yield put(getDocumentaryByRelationFailure('GET_DOCUMENTARY_BY_RELATION', error?.response?.data?.message))
  }
}
