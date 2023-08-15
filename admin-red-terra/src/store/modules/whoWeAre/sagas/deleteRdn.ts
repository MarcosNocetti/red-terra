import { call, put } from 'redux-saga/effects'
import { deleteRdnSuccess, deleteRdnFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteRdn(data: any): any {
  const { payload } = data
  const { id, rdn } = payload;

  try {
    const { data } = yield call(api.delete, `/rdn/${id}`)

    const newRdn = rdn.filter((item: any) => item.id !== id);

    yield put(deleteRdnSuccess(newRdn, 'DELETE_RDN'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteRdnFailure('DELETE_RDN', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
