import { put } from 'redux-saga/effects';
import { awardResetInitialStateSuccess } from '../actions';

export function* resetInitialState(): any {
  yield put(awardResetInitialStateSuccess());
}
