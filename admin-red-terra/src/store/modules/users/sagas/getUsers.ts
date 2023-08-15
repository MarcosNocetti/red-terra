import { call, put } from 'redux-saga/effects'
import { getUsersFailure, getUsersSuccess } from '../actions'
import api from '../../../../services/api'

export function* getUsers(): any {
  try {
    const { data } = yield call(api.get, '/users')

    yield put(getUsersSuccess(data.data))
  } catch (error: any) {
    yield put(getUsersFailure('GET_USERS'))
  }
}
