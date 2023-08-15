import { call, put } from 'redux-saga/effects'
import { updateWhoWeAreSuccess, updateWhoWeAreFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateWhoWeAre(data: any): any {
  const { payload } = data
  const { updateWhoWeAre, id } = payload;

  try {
    const { data } = yield call(api.patch, `/whoWeAre/${id}`, updateWhoWeAre)

    yield put(updateWhoWeAreSuccess(data.data, 'UPDATE_WHO_WE_ARE'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateWhoWeAreFailure('UPDATE_WHO_WE_ARE', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
