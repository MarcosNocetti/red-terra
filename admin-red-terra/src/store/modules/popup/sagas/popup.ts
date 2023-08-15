import { put } from 'redux-saga/effects'
import { popupSuccess } from '../actions'

export function* popup(data: any): any {
  const { payload } = data

  yield put(popupSuccess(payload.text, payload.type))
}
