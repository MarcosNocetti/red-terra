import * as bcrypt from 'bcrypt';

export function encrypt(value: string): string {
  return bcrypt.hashSync(value, 10);
}
