import { call, put } from 'redux-saga/effects'
import { updateContactFailure, updateContactSuccess } from '../actions'
import { IContact } from '../../../../interfaces/contact'
import api from '../../../../services/api'
import { popupRequest } from '../../popup/actions'

export function* updateContact(data: any): any {
  const { payload } = data
  const { contacts, updatedContactData, id } = payload

  try {
    const { data } = yield call(api.patch, '/contact/' + id, updatedContactData)

    const updatedContacts = contacts?.map((contact: IContact) =>
      contact.id === data.data.id ? data.data : contact
    )

    yield put(
      updateContactSuccess(updatedContacts, 'Contact updated successfully')
    )
    yield put(popupRequest('Contact updated successfully', 'success'))
  } catch (error: any) {
    yield put(updateContactFailure(error?.response?.data?.message))
    yield put(popupRequest(error?.response?.data?.message, 'error'))
  }
}
