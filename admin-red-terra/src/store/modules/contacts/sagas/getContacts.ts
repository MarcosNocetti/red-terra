import { call, put } from 'redux-saga/effects'
import { getContactsFailure, getContactsSuccess } from '../actions'
import api from '../../../../services/api'

export function* getContacts(): any {
  try {
    const { data } = yield call(api.get, '/contact')

    yield put(getContactsSuccess(data.data))
  } catch (error: any) {
    yield put(getContactsFailure())
  }
}
