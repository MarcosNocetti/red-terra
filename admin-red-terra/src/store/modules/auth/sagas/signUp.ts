import { call, put } from 'redux-saga/effects'
import { signInFailure, signUpSuccess } from '../actions'
import api from '../../../../services/api'

export function* signUp(data: any): any {
  const { payload } = data

  try {
    yield call(api.post, '/users', payload)

    yield put(signUpSuccess())
  } catch (error: any) {
    const { message } = error
    yield put(signInFailure(message))
  }
}
