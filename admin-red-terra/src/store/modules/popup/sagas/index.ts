import { takeLatest } from 'redux-saga/effects'
import { popup } from './popup'
import { resetBaseState } from './resetBaseState'
import { resetInitialState } from './resetInitialState'

// eslint-disable-next-line
export default [
  takeLatest('@popup/POP_UP_REQUEST', popup),
  takeLatest('@popup/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@popup/RESET_INITIAL_STATE_REQUEST', resetInitialState)
]
