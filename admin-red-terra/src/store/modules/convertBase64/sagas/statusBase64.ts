import { put } from 'redux-saga/effects'
import { statusBase64Success, statusBase64Failure } from '../actions'

export function* statusBase64(data: any): any {
  const { payload } = data
  const { base64 } = payload
  try {
    yield put(statusBase64Success(base64, 'UPDATE_LINKS'))
  } catch (error: any) {
    yield put(statusBase64Failure('UPDATE_LINKS', error?.response?.data?.message))
  }
}
