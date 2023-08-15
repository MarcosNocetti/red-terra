import { call, put } from 'redux-saga/effects'
import { createClientReviewSuccess, createClientReviewFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createClientReview(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.post, '/clientReview', payload.clientReview)

    yield put(createClientReviewSuccess('CREATE_CLIENT_REVIEW'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createClientReviewFailure('CREATE_CLIENT_REVIEW', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))

  }
}
