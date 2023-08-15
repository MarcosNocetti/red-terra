import { takeLatest } from 'redux-saga/effects'
import { footer } from './updateFooter'
import { getFooter } from './getFooter'
import { getFooterLinks } from './getLinks'
import { updateLinks } from './updateLinks'
// eslint-disable-next-line
export default [
  takeLatest('@footer/FOOTER_REQUEST', footer),
  takeLatest('@footer/GET_FOOTER_REQUEST', getFooter),
  takeLatest('@footer/GET_FOOTER_LINKS_REQUEST', getFooterLinks),
  takeLatest('@footer/UPDATE_LINKS_REQUEST', updateLinks)
]
