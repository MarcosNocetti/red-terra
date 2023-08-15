import { IsOptional, IsString } from 'class-validator';
import { IUser } from '../../interfaces';

export class UserDto implements IUser {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;
}
