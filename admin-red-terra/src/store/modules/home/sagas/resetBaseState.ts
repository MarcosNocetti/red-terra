import { put } from 'redux-saga/effects'
import { homeResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(homeResetBaseStateSuccess())
}
