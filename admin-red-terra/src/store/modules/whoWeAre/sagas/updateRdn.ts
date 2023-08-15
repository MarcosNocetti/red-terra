import { call, put } from 'redux-saga/effects'
import { updateRdnSuccess, updateRdnFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateRdn(data: any): any {
  const { payload } = data
  const { updateRdn, id } = payload;

  try {
    const { data } = yield call(api.patch, `/rdn/${id}`, updateRdn)

    yield put(updateRdnSuccess('UPDATE_RDN'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateRdnFailure('UPDATE_RDN', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
