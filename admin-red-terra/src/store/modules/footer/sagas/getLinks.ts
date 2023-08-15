import { call, put } from 'redux-saga/effects'
import { getFooterLinksSuccess, getFooterLinksFailure } from '../actions'
import api from '../../../../services/api'

export function* getFooterLinks(data: any): any {
  try {
    const { data } = yield call(api.get, `/footer/links`)

    yield put(getFooterLinksSuccess(data.data, 'GET_FOOTER'))
  } catch (error: any) {
    yield put(getFooterLinksFailure('GET_FOOTER', error?.response?.data?.message))
  }
}
