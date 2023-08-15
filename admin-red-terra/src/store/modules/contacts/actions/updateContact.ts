import { IContact } from '../../../../interfaces/contact'

export function updateContactRequest(
  contacts: IContact[],
  updatedContactData: IContact,
  id: string
) {
  return {
    type: '@contacts/UPDATE_CONTACT_REQUEST',
    payload: { contacts, updatedContactData, id }
  }
}

export function updateContactSuccess(contacts: IContact[], message: string) {
  return {
    type: '@contacts/UPDATE_CONTACT_SUCCESS',
    payload: { contacts, message }
  }
}

export function updateContactFailure(error: string) {
  return {
    type: '@contacts/UPDATE_CONTACT_FAILURE',
    payload: { error }
  }
}
