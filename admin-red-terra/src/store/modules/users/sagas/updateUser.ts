import { call, put } from 'redux-saga/effects'
import { updateUserFailure, updateUserSuccess } from '../actions'
import api from '../../../../services/api'
import { IUser } from '../../../../interfaces/user'
import { popupRequest } from '../../popup/actions'

export function* updateUser(data: any): any {
  const { payload } = data
  const { users, updatedUserData, id } = payload

  try {
    const { data } = yield call(api.patch, '/users/' + id, updatedUserData)

    const updatedUsers = users?.map((user: IUser) =>
      user.id === data.data.id ? data.data : user
    )

    yield put(updateUserSuccess(updatedUsers, 'UPDATE_USER'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateUserFailure('UPDATE_USER'))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
