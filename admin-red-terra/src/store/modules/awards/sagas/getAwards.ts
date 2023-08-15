import { call, put } from 'redux-saga/effects';
import { getAwardsFailure, getAwardsSuccess } from '../actions';
import api from '../../../../services/api';

export function* getAwards(): any {
  try {
    const { data } = yield call(api.get, '/awards');

    yield put(getAwardsSuccess(data.data));
  } catch (error: any) {
    yield put(getAwardsFailure('GET_AWARDS'));
  }
}
