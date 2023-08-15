import { put } from 'redux-saga/effects'
import { popupResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(popupResetBaseStateSuccess())
}
