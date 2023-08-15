import { call, put } from 'redux-saga/effects';
import {
  reauthFailure,
  reauthSuccess,
  signInFailure,
  signInSuccess,
} from '../actions';
import api from '../../../../services/api';
import jwt_decode from 'jwt-decode';

export function* signIn(data: any): any {
  const { payload } = data;

  try {
    const { data } = yield call(api.post, '/auth', payload);
    const accessToken = data.data.access_token;

    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const user: any = jwt_decode(accessToken);
    localStorage.setItem('token', accessToken);

    yield put(signInSuccess({ ...user, id: user.sub }));
  } catch (error: any) {
    const { message } = error;
    yield put(signInFailure(message));
  }
}

export function* reauth(): any {
  try {
    const accessToken = localStorage.getItem('token');

    if (!accessToken?.length) {
      yield put(reauthFailure());
    } else {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      try {
        yield call(api.get, '/auth');

        const user: any = jwt_decode(accessToken);
        yield put(reauthSuccess({ ...user, id: user.sub }));
      } catch {
        localStorage.clear();
        yield put(reauthFailure());
      }
    }
  } catch (error: any) {
    const { message } = error;
    yield put(reauthFailure(message));
  }
}
