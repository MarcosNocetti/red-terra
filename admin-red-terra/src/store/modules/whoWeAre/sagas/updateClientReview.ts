import { call, put } from 'redux-saga/effects'
import { updateClientReviewSuccess, updateClientReviewFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateClientReview(data: any): any {
  const { payload } = data
  const { updateClientReview, id } = payload;

  try {
    const { data } = yield call(api.patch, `/clientReview/${id}`, updateClientReview)

    yield put(updateClientReviewSuccess('UPDATE_CLIENT_REVIEW'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateClientReviewFailure('UPDATE_CLIENT_REVIEW', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
