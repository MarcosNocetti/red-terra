import { call, put } from 'redux-saga/effects';
import { updateAwardFailure, updateAwardSuccess } from '../actions';
import api from '../../../../services/api';
import { popupRequest } from '../../popup/actions';

export function* updateAward(data: any): any {
  const { payload } = data;
  const { awards, updatedAwardData, id } = payload;

  try {
    const { data } = yield call(api.patch, '/awards/' + id, updatedAwardData);

    const updatedAwards = awards?.map((award: any) =>
      award.id === data.data.id ? data.data : award
    );

    yield put(updateAwardSuccess(updatedAwards, 'UPDATE_AWARD'));
    yield put(popupRequest(data.message, 'success'));
  } catch (error: any) {
    yield put(updateAwardFailure('UPDATE_AWARD'));
    yield put(popupRequest(error?.response?.data?.message, 'error'));

  }
}
