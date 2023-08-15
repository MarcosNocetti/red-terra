import { call, put } from 'redux-saga/effects'
import { updateCreditSuccess, updateCreditFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateCredit(data: any): any {
  const { payload } = data
  const { updateCredit, id } = payload;

  try {
    const { data } = yield call(api.patch, `/credits/${id}`, updateCredit)
    
    yield put(updateCreditSuccess('UPDATE_CREDIT'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateCreditFailure('UPDATE_CREDIT', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
