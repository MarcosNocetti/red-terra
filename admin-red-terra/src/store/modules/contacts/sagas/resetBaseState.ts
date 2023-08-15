import { put } from 'redux-saga/effects'
import { contactResetBaseStateSuccess } from '../actions'

export function* resetBaseState(): any {
  yield put(contactResetBaseStateSuccess())
}
