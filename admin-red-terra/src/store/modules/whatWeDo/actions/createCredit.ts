import { IWhatWeDo } from '../../../../interfaces/whatWeDo'

export function createCreditRequest(
  subtitle: string,
  text: string,
  whatWeDoId: string,
  language: string
) {
  return {
    type: '@whatWeDo/CREATE_CREDIT_REQUEST',
    payload: {
      subtitle,
      text,
      whatWeDoId,
      language
    }
  }
}

export function createCreditSuccess(whatWeDo: IWhatWeDo, type: string) {
  return {
    type: '@whatWeDo/CREATE_CREDIT_SUCCESS',
    payload: { whatWeDo, type }
  }
}

export function createCreditFailure(type: string, message: string) {
  return {
    type: '@whatWeDo/CREATE_CREDIT_FAILURE',
    payload: { type, message }
  }
}
