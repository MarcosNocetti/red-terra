import { takeLatest } from 'redux-saga/effects'
import { getHome } from './getHome'
import { resetBaseState } from './resetBaseState'
import { resetInitialState } from './resetInitialState'
import { updateHome } from './updateHome'

// eslint-disable-next-line
export default [
  takeLatest('@home/GET_HOME_REQUEST', getHome),
  takeLatest('@home/UPDATE_HOME_REQUEST', updateHome),
  takeLatest('@home/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@home/RESET_INITIAL_STATE_REQUEST', resetInitialState)
]
