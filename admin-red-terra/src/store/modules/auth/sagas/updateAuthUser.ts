import { put } from 'redux-saga/effects'
import { updateAuthUserFailure, updateAuthUserSuccess } from '../actions'

export function* updateAuthUser(data: any) {
  try {
    const { payload } = data

    yield put(updateAuthUserSuccess(payload.userData))
  } catch (error: any) {
    const { message } = error
    yield put(updateAuthUserFailure())
  }
}
