import { takeLatest } from 'redux-saga/effects'
import { getHeaders } from './getHeaders'
import { resetBaseState } from './resetBaseState'
import { resetInitialState } from './resetInitialState'
import { updateHeader } from './updateHeader'
import { updateLink } from './updateLink'

// eslint-disable-next-line
export default [
  takeLatest('@headers/GET_HEADERS_REQUEST', getHeaders),
  takeLatest('@headers/UPDATE_HEADER_REQUEST', updateHeader),
  takeLatest('@headers/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@headers/RESET_INITIAL_STATE_REQUEST', resetInitialState),
  takeLatest('@headers/UPDATE_LINK_REQUEST', updateLink)
]
