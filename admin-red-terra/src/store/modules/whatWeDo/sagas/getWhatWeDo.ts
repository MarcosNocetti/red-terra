import { call, put } from 'redux-saga/effects'
import { getWhatWeDoSuccess, getWhatWeDoFailure } from '../actions'
import api from '../../../../services/api'

export function* getWhatWeDo(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.get, `/whatWeDo/${payload.language}`)

    yield put(getWhatWeDoSuccess(data.data, 'GET_WHAT_WE_DO'))
  } catch (error: any) {
    yield put(getWhatWeDoFailure('GET_WHAT_WE_DO', error?.response?.data?.message))
  }
}
