import { call, put } from 'redux-saga/effects'
import { createCreditFailure, createCreditSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createCredit(data: any): any {
  const { payload } = data
  try {
    const { data } = yield call(api.post, '/credits', payload)

    yield put(createCreditSuccess(data.data, 'CREATE_CREDIT'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createCreditFailure('CREATE_CREDIT', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
