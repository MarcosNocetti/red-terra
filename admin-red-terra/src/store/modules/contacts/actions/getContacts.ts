import { IContact } from '../../../../interfaces/contact'

export function getContactsRequest() {
  return {
    type: '@contacts/GET_CONTACTS_REQUEST'
  }
}

export function getContactsSuccess(contacts: IContact[]) {
  return {
    type: '@contacts/GET_CONTACTS_SUCCESS',
    payload: { contacts }
  }
}

export function getContactsFailure() {
  return {
    type: '@contacts/GET_CONTACTS_FAILURE'
  }
}
