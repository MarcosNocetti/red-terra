import { call, put } from 'redux-saga/effects'
import { updateHeaderFailure, updateHeaderSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* updateHeader(data: any): any {
  const { payload } = data
  const { headers, updatedHeaderData, id } = payload
  const { links, ...headerData } = updatedHeaderData

  try {
    const { data } = yield call(api.patch, '/headers/' + id, headerData)

    const updatedHeaders = headers?.map((header: any) =>
      header.id === data.data.id ? data.data : header
    )

    yield put(
      updateHeaderSuccess(updatedHeaders, 'Header updated successfully')
    )
    yield put(popupRequest('Header updated successfully', 'success'))
  } catch (error: any) {
    yield put(updateHeaderFailure(error?.response?.data?.message))
    yield put(
      popupRequest(
        error?.response?.data?.message ||
          'Error updating header. Try again later.',
        'error'
      )
    )
  }
}
