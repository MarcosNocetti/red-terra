import { call, put } from 'redux-saga/effects'
import { deleteAwardSuccess, deleteAwardFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteAward(data: any): any {
  const { payload } = data
  const { id, award } = payload;

  try {
    const { data } = yield call(api.delete, `/awards/${id}`)

    const newAward = award.filter((item: any) => item.id !== id);

    yield put(deleteAwardSuccess(newAward, 'DELETE_AWARD'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteAwardFailure('DELETE_AWARD', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
