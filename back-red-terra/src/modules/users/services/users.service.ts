import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { encrypt } from 'src/shared/utils/encrypt';
import { validateEmail } from 'src/shared/utils/validateEmail';
import { FindManyOptions } from 'typeorm';
import { UserRepository } from '../infra/repositories';
import { IUser, IUserRepository } from '../interfaces';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async create(
    data: IUser,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>
    >
  > {
    if (!validateEmail(data?.email)) {
      return failure({
        data: 'Invalid email',
        message: 'Cannot create user with invalid email',
        success: false,
      });
    }

    if (!!(await this.userRepository.findRegister({ email: data.email }))) {
      return failure({
        data: 'Invalid email',
        message: 'Email already in use',
        success: false,
      });
    }

    if (data?.name.length < 4) {
      return failure({
        data: 'Name length',
        message: 'Name must have at least 4 characters',
        success: false,
      });
    }

    if (!data?.password) {
      data.password = encrypt('123');
    } else {
      if (data.password.length < 6) {
        return failure({
          data: 'Password length',
          message: 'Password must have at least 6 characters',
          success: false,
        });
      }

      data.password = encrypt(data.password);
    }

    const createdUser: Omit<UserEntity, 'password'> =
      await this.userRepository.save(data);

    return success({
      data: createdUser,
      message: 'User created successfully',
      success: true,
    });
  }

  async delete(
    userId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<UserEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!userId?.length) {
      return failure({
        data: 'User id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.userRepository.findRegister({ id: userId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${userId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.userRepository.delete(userId);

    return success({
      data: deletedId,
      message: 'User deleted successfuly',
      success: true,
    });
  }

  async get(
    userParams: Partial<Omit<UserEntity, BaseEntityOmitPropsType | 'password'>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>
    >
  > {
    const user: Omit<UserEntity, 'password'> =
      await this.userRepository.findRegister(userParams);

    if (!user) {
      return failure({
        message: 'No user found',
        success: true,
      });
    }

    return success({
      data: user,
      message: 'Users found successfully',
      success: true,
    });
  }

  async getAll(
    whereConditions?: Partial<UserEntity>,
    selectConditions?: (keyof UserEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<UserEntity>, 'where' | 'select'>
    >,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<UserEntity, 'password'>[]>, 'statusCode'>
    >
  > {
    const users: Omit<UserEntity, 'password'>[] =
      await this.userRepository.findRegisters(
        whereConditions,
        selectConditions,
        otherConditions,
      );

    if (!users.length) {
      return failure({
        message: 'No users found',
        success: true,
      });
    }

    return success({
      data: users,
      message: 'Users found successfully',
      success: true,
    });
  }

  async updateRegister(
    whereConditions: Partial<Omit<UserEntity, BaseEntityOmitPropsType>>,
    updatedData: Partial<IUser>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<UserEntity, 'password'>>, 'statusCode'>
    >
  > {
    const user = await this.userRepository.findRegister(whereConditions);

    if (!user) {
      return failure({
        message: 'No user found',
        success: true,
      });
    }

    if (!updatedData) {
      return failure({
        message: 'Nothing to update',
        success: false,
      });
    }
    if (updatedData?.password) {
      if (updatedData.password.length < 6) {
        return failure({
          data: 'Password length',
          message: 'Password must have at least 6 characters',
          success: false,
        });
      }

      updatedData.password = encrypt(updatedData.password);

      if (!user.active) {
        updatedData.active = true;
      }
    }

    const updatedUser = await this.userRepository.save({
      ...user,
      ...updatedData,
    });

    return success({
      data: updatedUser,
      message: 'User updated successfully',
      success: true,
    });
  }
}
