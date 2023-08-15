import { takeLatest } from 'redux-saga/effects'
import { getContacts } from './getContacts'
import { resetBaseState } from './resetBaseState'
import { resetInitialState } from './resetInitialState'
import { updateContact } from './updateContacts'

// eslint-disable-next-line
export default [
  takeLatest('@contacts/GET_CONTACTS_REQUEST', getContacts),
  takeLatest('@contacts/UPDATE_CONTACT_REQUEST', updateContact),
  takeLatest('@contacts/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@contacts/RESET_INITIAL_STATE_REQUEST', resetInitialState)
]
