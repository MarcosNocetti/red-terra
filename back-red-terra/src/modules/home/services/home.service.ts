import { Injectable } from '@nestjs/common';
import { HomeEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { HomeRepository } from '../infra/repositories';
import { IHome } from '../interfaces';

@Injectable()
export class HomeService {
  constructor(private readonly homeRepository: HomeRepository) {}

  async create(
    data: IHome,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<HomeEntity, 'language'>>, 'statusCode'>
    >
  > {
    const { videoUrl } = data;

    if (!videoUrl?.length) {
      return failure({
        data: 'Home video url',
        message: 'Home must have a video url',
        success: false,
      });
    }

    const { language, ...newHome } = await this.homeRepository.save({
      videoUrl,
    });

    return success({
      data: newHome,
      message: 'Home created successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HomeEntity>, 'statusCode'>
    >
  > {
    const { ...home } = await this.homeRepository.findRegister({
      id: '1',
    });

    return success({
      data: home,
      message: 'Home found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<HomeEntity, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<HomeEntity, 'language'>>, 'statusCode'>
    >
  > {
    const { id, ...updatedHome } = data;

    const homeExists = await this.homeRepository.findRegister({
      id,
    });

    if (!homeExists) {
      return failure({
        message: 'No home found',
        success: false,
      });
    }

    const { language, ...home } = await this.homeRepository.save({
      ...homeExists,
      ...updatedHome,
    });

    return success({
      data: home,
      message: 'Home updated successfully',
      success: true,
    });
  }
}
