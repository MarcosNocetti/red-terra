import { put } from 'redux-saga/effects'
import { contactResetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(contactResetInitialStateSuccess())
}
