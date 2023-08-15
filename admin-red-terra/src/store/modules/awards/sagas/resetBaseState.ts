import { put } from 'redux-saga/effects';
import { awardResetBaseStateSuccess } from '../actions';

export function* resetBaseState(): any {
  yield put(awardResetBaseStateSuccess());
}
