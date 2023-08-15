import { put } from 'redux-saga/effects'
import { resetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(resetInitialStateSuccess())
}
