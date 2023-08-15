import { call, put } from 'redux-saga/effects'
import { updatePasswordFailure, updatePasswordSuccess } from '../actions'
import api from '../../../../services/api'

export function* validatePasswordToken(data: any) {
  // const { payload } = data
  // const { id, password } = payload
  // try {
  //   yield call(api.post, `/users/${id}`, { password })
  //   yield put(updatePasswordSuccess())
  // } catch (error: any) {
  //   const { message } = error
  //   yield put(updatePasswordFailure(message))
  // }
}
