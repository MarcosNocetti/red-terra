import { call, put } from 'redux-saga/effects'
import { getTeamSuccess, getTeamFailure } from '../actions'
import api from '../../../../services/api'

export function* getTeam(data: any): any {
  try {
    const { data } = yield call(api.get, `/teamPeople`)

    yield put(getTeamSuccess(data.data, 'GET_TEAM'))
  } catch (error: any) {
    yield put(getTeamFailure('GET_TEAM', error?.response?.data?.message))
  }
}
