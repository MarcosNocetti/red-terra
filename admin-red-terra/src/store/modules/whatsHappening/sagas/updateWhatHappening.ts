import { call, put } from 'redux-saga/effects'
import { updateWhatsHappeningSuccess, updateWhatsHappeningFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateWhatHappening(data: any): any {
  const { payload } = data
  const { updateWhatsHappening, id } = payload;

  try {
    const { data } = yield call(api.patch, `/whatsHappening/${id}`, updateWhatsHappening)

    yield put(updateWhatsHappeningSuccess(data.data, 'UPDATE_WHATS_HAPPENING'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateWhatsHappeningFailure('UPDATE_WHATS_HAPPENING', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
