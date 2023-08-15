import { call, put } from 'redux-saga/effects'
import { deleteDocumentarySuccess, deleteDocumentaryFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteDocumentary(data: any): any {
  const { payload } = data
  const { id, documentary } = payload;

  try {
    const { data } = yield call(api.delete, `/documentary/${id}`)

    const newDocumentary = documentary.filter((item: any) => item.id !== id);

    yield put(deleteDocumentarySuccess(newDocumentary, 'DELETE_DOCUMENTARY'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteDocumentaryFailure('DELETE_DOCUMENTARY', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
