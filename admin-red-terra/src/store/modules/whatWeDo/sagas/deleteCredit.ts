import { call, put } from 'redux-saga/effects'
import { deleteCreditSuccess, deleteCreditFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteCredit(data: any): any {
  const { payload } = data
  const { id, credit } = payload;

  try {
    const { data } = yield call(api.delete, `/credits/${id}`)

    const newCredit = credit.filter((item: any) => item.id !== id);

    yield put(deleteCreditSuccess(newCredit, 'DELETE_CREDIT'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteCreditFailure('DELETE_CREDIT', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
