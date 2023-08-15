import { call, put } from 'redux-saga/effects'
import { footerSuccess, footerFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* footer(data: any): any {
  const { payload } = data
  const { id, updateFooter } = payload

  try {
    const { data } = yield call(api.patch, `/footer/${id}`, updateFooter)

    yield put(footerSuccess('UPDATE_FOOTER'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(footerFailure('UPDATE_FOOTER', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
