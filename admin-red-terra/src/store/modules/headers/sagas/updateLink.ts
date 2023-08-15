import { call, put } from 'redux-saga/effects'
import { updateLinkFailure, updateLinkSuccess } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* updateLink(data: any): any {
  const { payload } = data
  const { links, updatedLinkData, id } = payload

  try {
    const { data } = yield call(
      api.post,
      '/headers/link',
      updatedLinkData
    )

    const updatedLinks = links?.map((link: any) =>
      link.id === data.data.id ? data.data : link
    )

    yield put(updateLinkSuccess(updatedLinks, 'Link updated successfully'))
    yield put(popupRequest('Link updated successfully', 'success'))
  } catch (error: any) {
    yield put(updateLinkFailure(error?.response?.data?.message))
    yield put(
      popupRequest(
        error?.response?.data?.message ||
          'Error updating link. Try again later.',
        'error'
      )
    )
  }
}
