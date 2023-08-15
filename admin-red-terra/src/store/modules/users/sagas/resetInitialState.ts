import { put } from 'redux-saga/effects'
import { userResetInitialStateSuccess } from '../actions'

export function* resetInitialState(): any {
  yield put(userResetInitialStateSuccess())
}
