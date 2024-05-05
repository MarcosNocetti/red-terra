import { IUserEntity } from '../../modules/users/interfaces';
export declare class UserEntity implements IUserEntity {
    id: string;
    name: string;
    password: string;
    email: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    validatePassword(password: string): boolean;
}
