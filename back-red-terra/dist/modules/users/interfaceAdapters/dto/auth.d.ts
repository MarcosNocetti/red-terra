import { IUser } from '../../interfaces';
export declare class UserAuthDto implements Partial<IUser> {
    email: string;
    password: string;
}
