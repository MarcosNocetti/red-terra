import { UserEntity } from 'src/entities';
import { IRepository } from 'src/shared/protocols';

export interface IUserRepository extends IRepository<UserEntity> {}
