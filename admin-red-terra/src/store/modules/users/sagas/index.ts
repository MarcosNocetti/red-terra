import { takeLatest } from 'redux-saga/effects'
import { createUser } from './createUser'
import { deleteUser } from './deleteUser'
import { getUsers } from './getUsers'
import { resetBaseState } from './resetBaseState'
import { resetInitialState } from './resetInitialState'
import { updateUser } from './updateUser'
// eslint-disable-next-line
export default [
  takeLatest('@users/GET_USERS_REQUEST', getUsers),
  takeLatest('@users/CREATE_USER_REQUEST', createUser),
  takeLatest('@users/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@users/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@users/RESET_INITIAL_STATE_REQUEST', resetInitialState),
  takeLatest('@users/DELETE_USER_REQUEST', deleteUser)
]
