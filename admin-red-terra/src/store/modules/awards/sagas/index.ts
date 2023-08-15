import { takeLatest } from 'redux-saga/effects';
import { createAward } from './createAward';
import { deleteAward } from './deleteAward';
import { getAwards } from './getAwards';
import { resetBaseState } from './resetBaseState';
import { resetInitialState } from './resetInitialState';
import { updateAward } from './updateAward';

// eslint-disable-next-line
export default [
  takeLatest('@awards/GET_AWARDS_REQUEST', getAwards),
  takeLatest('@awards/CREATE_AWARD_REQUEST', createAward),
  takeLatest('@awards/UPDATE_AWARD_REQUEST', updateAward),
  takeLatest('@awards/RESET_BASE_STATE_REQUEST', resetBaseState),
  takeLatest('@awards/RESET_INITIAL_STATE_REQUEST', resetInitialState),
  takeLatest('@awards/DELETE_AWARD_REQUEST', deleteAward),
];
