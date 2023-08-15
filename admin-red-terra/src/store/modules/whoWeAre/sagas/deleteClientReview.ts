import { call, put } from 'redux-saga/effects'
import { deleteClientReviewSuccess, deleteClientReviewFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteClientReview(data: any): any {
  const { payload } = data
  const { id, clientReview } = payload;

  try {
    const { data } = yield call(api.delete, `/clientReview/${id}`)

    const newClientReview = clientReview.filter((item: any) => item.id !== id);

    yield put(deleteClientReviewSuccess(newClientReview, 'DELETE_CLIENT_REVIEW'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteClientReviewFailure('DELETE_CLIENT_REVIEW', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
