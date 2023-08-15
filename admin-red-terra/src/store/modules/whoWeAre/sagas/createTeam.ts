import { call, put } from 'redux-saga/effects'
import { createTeamSuccess, createTeamFailure } from '../actions'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* createTeam(data: any): any {
  const { payload } = data

  try {
    const { data } = yield call(api.post, '/teamPeople', payload.team)

    yield put(createTeamSuccess('CREATE_TEAM'))
    yield put(popupRequest(data.message, 'success'))
  } catch (error: any) {
    yield put(createTeamFailure('CREATE_TEAM', error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
