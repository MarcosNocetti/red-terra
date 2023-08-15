import { put } from 'redux-saga/effects'
import { popupResetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(popupResetInitialStateSuccess())
}
