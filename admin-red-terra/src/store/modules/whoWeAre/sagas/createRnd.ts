import { call, put } from 'redux-saga/effects'
import { createRndSuccess, createRndFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createRnd(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.post, '/rdn', payload.rnd)

    yield put(createRndSuccess('CREATE_RND'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createRndFailure('CREATE_RND', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
