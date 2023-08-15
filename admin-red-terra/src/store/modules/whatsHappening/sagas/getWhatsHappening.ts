import { call, put } from 'redux-saga/effects'
import { getWhatsHappeningSuccess, getWhatsHappeningFailure } from '../actions'
import api from '../../../../services/api'

export function* getWhatsHappening(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.get, `/whatsHappening/${payload.language}`)

    yield put(getWhatsHappeningSuccess(data.data, 'GET_HAPPENING'))
  } catch (error: any) {
    yield put(getWhatsHappeningFailure('GET_HAPPENING', error?.response?.data?.message))
  }
}
