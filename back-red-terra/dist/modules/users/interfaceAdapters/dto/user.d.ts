import { IUser } from '../../interfaces';
export declare class UserDto implements IUser {
    name: string;
    email: string;
    password?: string;
}
