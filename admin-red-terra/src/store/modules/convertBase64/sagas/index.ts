import { takeLatest } from 'redux-saga/effects'
import { statusBase64 } from './statusBase64'
// eslint-disable-next-line
export default [
  takeLatest('@base64/STATUS_BASE64_REQUEST', statusBase64)
]
