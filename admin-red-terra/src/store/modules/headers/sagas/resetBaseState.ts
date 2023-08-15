import { put } from 'redux-saga/effects'
import { headerResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(headerResetBaseStateSuccess())
}
