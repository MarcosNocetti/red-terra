import { takeLatest } from 'redux-saga/effects'
import { createCredit } from './createCredit'
import { getWhatWeDo } from './getWhatWeDo'
import { updateWhatWeDo } from './updateWhatWeDo'
import { getCredit } from './getCredit'
import { updateCredit } from './updateCredit'
import { createDocumentary } from './createDocumentary'
import { getDocumentary } from './getDocumentary'
import { updateDocumentary } from './updateDocumentary'
import { deleteCredit } from './deleteCredit'
import { deleteDocumentary } from './deleteDocumentary'
import { getDocumentaryByRelation } from './getDocumentaryByRelation'
// eslint-disable-next-line
export default [
  takeLatest('@whatWeDo/GET_WHAT_WE_DO_REQUEST', getWhatWeDo),
  takeLatest('@whatWeDo/CREATE_CREDIT_REQUEST', createCredit),
  takeLatest('@whatWeDo/UPDATE_WHAT_WE_DO_REQUEST', updateWhatWeDo),
  takeLatest('@whatWeDo/GET_CREDIT_REQUEST', getCredit),
  takeLatest('@whatWeDo/UPDATE_CREDIT_REQUEST', updateCredit),
  takeLatest('@whatWeDo/CREATE_DOCUMENTARY_REQUEST', createDocumentary),
  takeLatest('@whatWeDo/GET_DOCUMENTARY_REQUEST', getDocumentary),
  takeLatest('@whatWeDo/UPDATE_DOCUMENTARY_REQUEST', updateDocumentary),
  takeLatest('@whatWeDo/DELETE_CREDIT_REQUEST', deleteCredit),
  takeLatest('@whatWeDo/DELETE_DOCUMENTARY_REQUEST', deleteDocumentary),
  takeLatest('@whatWeDo/GET_DOCUMENTARY_BY_RELATION_REQUEST', getDocumentaryByRelation),

]
