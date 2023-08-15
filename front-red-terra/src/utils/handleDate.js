import {
  format,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const handleDate = date => {
  const newDate = new Date(date)
  return format(
    // hack para remover o UTC, data estavam sendo convertidas com valor errado
    new Date(newDate.valueOf() + newDate.getTimezoneOffset() * 60 * 1000),
    'dd/MM/yyyy',
    { locale: ptBR }
  )
}