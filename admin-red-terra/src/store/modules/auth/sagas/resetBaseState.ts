import { put } from 'redux-saga/effects'
import { authResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(authResetBaseStateSuccess())
}
