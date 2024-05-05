import { UserEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IUser, IUserEntity } from '../../interfaces';
import { IUserRepository } from '../../interfaces/userRepository.interface';
export declare class UserRepository implements IUserRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: IUser): Promise<UserEntity>;
    delete(id: string): Promise<UserEntity>;
    findRegister(whereConditions: Partial<Omit<IUserEntity, 'password'>>, selectConditions?: (keyof UserEntity)[], otherConditions?: Partial<Omit<FindOneOptions<UserEntity>, 'where' | 'select'>>): Promise<UserEntity>;
    findRegisters(whereConditions?: Partial<Omit<IUserEntity, 'password'>>, selectConditions?: (keyof UserEntity)[], otherConditions?: Partial<Omit<FindManyOptions<UserEntity>, 'where' | 'select'>>): Promise<UserEntity[]>;
}
