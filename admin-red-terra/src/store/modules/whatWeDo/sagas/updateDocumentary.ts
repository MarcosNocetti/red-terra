import { call, put } from 'redux-saga/effects'
import { updateDocumentarySuccess, updateDocumentaryFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateDocumentary(data: any): any {
  const { payload } = data
  const { updateDocumentary, id } = payload;

  try {
    const { data } = yield call(api.patch, `/documentary/${id}`, updateDocumentary)
    
    yield put(updateDocumentarySuccess('UPDATE_DOCUMENTARY'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateDocumentaryFailure('UPDATE_DOCUMENTARY', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
