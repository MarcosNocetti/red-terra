import { call, put } from 'redux-saga/effects'
import { getHeadersFailure, getHeadersSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* getHeaders(): any {
  try {
    const { data } = yield call(api.get, '/headers')
    
    const headerData: { headers: any[]; links: any[] } = {
      headers: [],
      links: []
    }
    data.data.forEach((header: any) => {
      const { links, ...headerInfo } = header
      headerData.headers.push(headerInfo)
      links.forEach((link: any) => headerData.links.push(link))
    })

    yield put(getHeadersSuccess(headerData))
  } catch (error: any) {
    yield put(getHeadersFailure())
    yield put(popupRequest('Error getting headers. Try again later.', 'error'))
  }
}
