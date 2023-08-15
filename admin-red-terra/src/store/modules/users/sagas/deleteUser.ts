import { call, put } from 'redux-saga/effects'
import { deleteUserSuccess, deleteUserFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteUser(data: any): any {
  const { payload } = data
  const { id, users } = payload;

  try {
    const { data } = yield call(api.delete, `/users/${id}`)

    const newUser = users.filter((item: any) => item.id !== id);

    yield put(deleteUserSuccess(newUser, 'DELETE_USER'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteUserFailure('DELETE_USER', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
