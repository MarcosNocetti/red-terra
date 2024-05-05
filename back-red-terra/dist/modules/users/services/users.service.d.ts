import { UserEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { FindManyOptions } from 'typeorm';
import { IUser, IUserRepository } from '../interfaces';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    create(data: IUser): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>>>;
    delete(userId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<UserEntity, 'language'>>, 'statusCode'>>>;
    get(userParams: Partial<Omit<UserEntity, BaseEntityOmitPropsType | 'password'>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>>>;
    getAll(whereConditions?: Partial<UserEntity>, selectConditions?: (keyof UserEntity)[], otherConditions?: Partial<Omit<FindManyOptions<UserEntity>, 'where' | 'select'>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<UserEntity, 'password'>[]>, 'statusCode'>>>;
    updateRegister(whereConditions: Partial<Omit<UserEntity, BaseEntityOmitPropsType>>, updatedData: Partial<IUser>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>>>;
}
