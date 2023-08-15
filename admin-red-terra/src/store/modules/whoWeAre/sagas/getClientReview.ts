import { call, put } from 'redux-saga/effects'
import { getClientReviewSuccess, getClientReviewFailure } from '../actions'
import api from '../../../../services/api'

export function* getClientReview(data: any): any {
  try {
    const { data } = yield call(api.get, `/clientReview`)

    yield put(getClientReviewSuccess(data.data, 'GET_CLIENT_REVIEW'))
  } catch (error: any) {
    yield put(getClientReviewFailure('GET_CLIENT_REVIEW', error?.response?.data?.message))
  }
}
