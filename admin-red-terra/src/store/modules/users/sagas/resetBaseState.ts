import { put } from 'redux-saga/effects'
import { userResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(userResetBaseStateSuccess())
}
