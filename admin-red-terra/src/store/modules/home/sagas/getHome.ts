import { call, put } from 'redux-saga/effects'
import api from '../../../../services/api'
import { getHomeFailure, getHomeSuccess } from '../actions'

export function* getHome(): any {
  try {
    const { data } = yield call(api.get, '/home')

    yield put(getHomeSuccess(data.data))
  } catch (error: any) {
    yield put(getHomeFailure())
  }
}
