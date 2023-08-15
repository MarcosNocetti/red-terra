import { call, put } from 'redux-saga/effects';
import { createAwardFailure, createAwardSuccess } from '../actions';
import api from '../../../../services/api';
import { popupRequest } from '../../popup/actions';

export function* createAward(data: any): any {
  const { payload } = data;
  
  try {
    const { data } = yield call(api.post, '/awards', payload);

    yield put(createAwardSuccess('CREATE_AWARD'));
    yield put(popupRequest(data.message, 'success'));
  } catch (error: any) {
    yield put(
      createAwardFailure('CREATE_AWARD', error?.response?.data?.message)
    );
    yield put(popupRequest(error?.response?.data?.message, 'error'));

  }
}
