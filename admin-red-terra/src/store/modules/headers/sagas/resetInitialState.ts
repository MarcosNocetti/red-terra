import { put } from 'redux-saga/effects'
import { headerResetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(headerResetInitialStateSuccess())
}
