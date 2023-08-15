import { call, put } from 'redux-saga/effects'
import { updateWhatWeDoSuccess, updateWhatWeDoFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateWhatWeDo(data: any): any {
  const { payload } = data
  const { updateWhatWeDo, id } = payload;

  try {
    const { data } = yield call(api.patch, `/whatWeDo/${id}`, updateWhatWeDo)

    yield put(updateWhatWeDoSuccess(data.data, 'UPDATE_WHAT_WE_DO'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateWhatWeDoFailure('UPDATE_WHAT_WE_DO', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
