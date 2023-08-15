import { takeLatest } from 'redux-saga/effects'
import { getWhoWeAre } from './getWhoWeAre'
import { updateWhoWeAre } from './updateWhoWeAre'
import { createClientReview } from './createClientReview'
import { getClientReview } from './getClientReview'
import { createRnd } from './createRnd'
import { getRdn } from './getRdn'
import { updateClientReview } from './updateClientReview'
import { createTeam } from './createTeam'
import { getTeam } from './getTeam'
import { updateRdn } from './updateRdn'
import { updateTeam } from './updateTeam'
import { deleteRdn } from './deleteRdn'
import { deleteTeam } from './deleteTeam'
import { deleteClientReview } from './deleteClientReview'
// eslint-disable-next-line
export default [
  takeLatest('@whoWeAre/GET_WHO_WE_ARE_REQUEST', getWhoWeAre),
  takeLatest('@whoWeAre/UPDATE_WHO_WE_ARE_REQUEST', updateWhoWeAre),
  takeLatest('@whoWeAre/CREATE_CLIENT_REVIEW_REQUEST', createClientReview),
  takeLatest('@whoWeAre/GET_CLIENT_REVIEW_REQUEST', getClientReview),
  takeLatest('@whoWeAre/CREATE_RND_REQUEST', createRnd),
  takeLatest('@whoWeAre/GET_RDN_REQUEST', getRdn),
  takeLatest('@whoWeAre/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@whoWeAre/GET_TEAM_REQUEST', getTeam),
  takeLatest('@whoWeAre/UPDATE_CLIENT_REVIEW_REQUEST', updateClientReview),
  takeLatest('@whoWeAre/UPDATE_RDN_REQUEST', updateRdn),
  takeLatest('@whoWeAre/UPDATE_TEAM_REQUEST', updateTeam),
  takeLatest('@whoWeAre/DELETE_RDN_REQUEST', deleteRdn),
  takeLatest('@whoWeAre/DELETE_TEAM_REQUEST', deleteTeam),
  takeLatest('@whoWeAre/DELETE_CLIENT_REVIEW_REQUEST', deleteClientReview),
]
