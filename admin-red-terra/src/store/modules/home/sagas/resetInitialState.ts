import { put } from 'redux-saga/effects'
import { homeResetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(homeResetInitialStateSuccess())
}
