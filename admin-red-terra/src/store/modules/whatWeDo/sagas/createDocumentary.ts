import { call, put } from 'redux-saga/effects'
import { createDocumentarySuccess, createDocumentaryFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createDocumentary(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.post, '/documentary', payload.createDocumentary)
    
    yield put(createDocumentarySuccess('CREATE_CREDIT'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createDocumentaryFailure('CREATE_CREDIT', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
