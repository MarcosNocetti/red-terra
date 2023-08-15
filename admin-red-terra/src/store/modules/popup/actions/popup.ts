import { AlertColor } from '@mui/material'

export function popupRequest(text: string, type: AlertColor) {
  return {
    type: '@popup/POP_UP_REQUEST',
    payload: { text, type }
  }
}

export function popupSuccess(text: string, type: AlertColor) {
  return {
    type: '@popup/POP_UP_SUCCESS',
    payload: { text, type }
  }
}

export function popupFailure(error: string) {
  return {
    type: '@popup/POP_UP_FAILURE',
    payload: { error }
  }
}
