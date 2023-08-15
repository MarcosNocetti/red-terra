import { call, put } from 'redux-saga/effects'
import { createUserFailure, createUserSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createUser(data: any): any {
  const { payload } = data
  try {
    const { data } = yield call(api.post, '/users', payload)

    yield put(createUserSuccess(data.data, 'CREATE_USER'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createUserFailure('CREATE_USER', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
