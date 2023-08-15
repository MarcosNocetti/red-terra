import { IsString } from 'class-validator';
import { IUser } from '../../interfaces';

export class UserAuthDto implements Partial<IUser> {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
