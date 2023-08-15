import { put } from 'redux-saga/effects';
import api from '../../../../services/api';
import { signOutFailure, signOutSuccess } from '../actions';

export function* signOut() {
  try {
    api.defaults.headers.common['Authorization'] = null;
    localStorage.clear();

    yield put(signOutSuccess());
  } catch (error: any) {
    const { message } = error;
    yield put(signOutFailure(message));
  }
}
