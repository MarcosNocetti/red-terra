import { call, put } from 'redux-saga/effects'
import { updateTeamSuccess, updateTeamFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* updateTeam(data: any): any {
  const { payload } = data
  const { updateTeam, id } = payload;

  try {
    const { data } = yield call(api.patch, `/teamPeople/${id}`, updateTeam)

    yield put(updateTeamSuccess('UPDATE_TEAM'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(updateTeamFailure('UPDATE_TEAM', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
