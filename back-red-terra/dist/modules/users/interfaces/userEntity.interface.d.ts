import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IUser } from './user.interface';
export interface IUserEntity extends IUser, IBaseEntity {
    password: string;
    active: boolean;
}
