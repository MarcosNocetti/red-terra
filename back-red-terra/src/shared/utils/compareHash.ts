import * as bcrypt from 'bcrypt';

export function compareHash(value: string, hash: string): boolean {
  return bcrypt.compareSync(value, hash);
}
