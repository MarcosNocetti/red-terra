import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Like,
  Repository,
} from 'typeorm';
import { IUser, IUserEntity } from '../../interfaces';
import { IUserRepository } from '../../interfaces/userRepository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  private repository: Repository<UserEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(UserEntity);
  }

  async save(data: IUser): Promise<UserEntity> {
    const user = await this.repository.save(data);
    delete user.password;

    return user;
  }

  async delete(id: string): Promise<UserEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<Omit<IUserEntity, 'password'>>,
    selectConditions?: (keyof UserEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<UserEntity>, 'where' | 'select'>
    >,
  ): Promise<UserEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions?.name
        ? { ...whereConditions, name: Like(`%${whereConditions.name}%`) }
        : { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<Omit<IUserEntity, 'password'>>,
    selectConditions?: (keyof UserEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<UserEntity>, 'where' | 'select'>
    >,
  ): Promise<UserEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions?.name
        ? { ...whereConditions, name: Like(`%${whereConditions.name}%`) }
        : { ...whereConditions },
    });
  }
}
