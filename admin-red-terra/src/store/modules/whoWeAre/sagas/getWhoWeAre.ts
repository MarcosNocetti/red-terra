import { call, put } from 'redux-saga/effects'
import { getWhoWeAreSuccess, getWhoWeAreFailure } from '../actions'
import api from '../../../../services/api'

export function* getWhoWeAre(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.get, `/whoWeAre/${payload.language}`)

    yield put(getWhoWeAreSuccess(data.data, 'GET_WHO_WE_ARE'))
  } catch (error: any) {
    yield put(getWhoWeAreFailure('GET_WHO_WE_ARE', error?.response?.data?.message))
  }
}
