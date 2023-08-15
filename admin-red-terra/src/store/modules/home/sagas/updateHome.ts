import { call, put } from 'redux-saga/effects'
import { updateHomeFailure, updateHomeSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* updateHome(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.patch, '/home/1', payload)

    yield put(updateHomeSuccess(data.data, 'Home updated successfully'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateHomeFailure(error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
