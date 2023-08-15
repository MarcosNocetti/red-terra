import { call, put } from 'redux-saga/effects'
import api from '../../../../services/api'
import { forgotPasswordFailure, forgotPasswordSuccess } from '../actions'

export function* forgotPassword(data: any): any {
  const { payload } = data

  try {
    yield call(api.post, '/auth/forgotPassword', payload.email)
    yield put(forgotPasswordSuccess())
  } catch (error: any) {
    const { message } = error
    yield put(forgotPasswordFailure(message))
  }
}
