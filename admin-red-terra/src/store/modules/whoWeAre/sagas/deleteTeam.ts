import { call, put } from 'redux-saga/effects'
import { deleteTeamSuccess, deleteTeamFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions';

export function* deleteTeam(data: any): any {
  const { payload } = data
  const { id, team } = payload;

  try {
    const { data } = yield call(api.delete, `/teamPeople/${id}`)

    const newTeam = team.filter((item: any) => item.id !== id);

    yield put(deleteTeamSuccess(newTeam, 'DELETE_TEAM'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(deleteTeamFailure('DELETE_TEAM', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
