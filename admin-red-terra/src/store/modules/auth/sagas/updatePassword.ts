import { call, put } from 'redux-saga/effects'
import { updatePasswordFailure, updatePasswordSuccess } from '../actions'
import api from '../../../../services/api'
import { IUser } from '../../../../interfaces/user'

export function* updatePassword(data: any) {
  const { payload } = data
  const { id, password } = payload

  try {
    const { data } = yield call(api.patch, `/users/${id}`, { password })

    yield put(updatePasswordSuccess(data.data as IUser))
  } catch (error: any) {
    const { message } = error
    yield put(updatePasswordFailure(message))
  }
}
