import { call, put } from 'redux-saga/effects'
import { updateLinksSuccess, updateLinksFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* updateLinks(data: any): any {
  const { payload } = data
  const { id, updateLinks } = payload
  try {
    const { data } = yield call(api.patch, `/footer/links/${id}`, updateLinks)

    yield put(updateLinksSuccess('UPDATE_LINKS'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateLinksFailure('UPDATE_LINKS', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
