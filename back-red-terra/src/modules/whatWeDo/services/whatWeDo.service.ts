import { Injectable } from '@nestjs/common';
import { WhatWeDoEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhatWeDoRepository } from '../infra/repositories';
import { UpdateWhatWeDoDto } from '../interfaceAdapters/dto';
import { IWhatWeDo } from '../interfaces';

@Injectable()
export class WhatWeDoService {
  constructor(private readonly whatWeDoRepository: WhatWeDoRepository) {}

  async create(
    data: IWhatWeDo,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatWeDoEntity>, 'statusCode'>
    >
  > {
    const { language, ...whatWeDo } = data;

    const newWhatWeDo = await this.whatWeDoRepository.save({
      ...whatWeDo,
      language,
    });

    return success({
      data: newWhatWeDo,
      message: 'WhatWeDo created successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatWeDoEntity[]>, 'statusCode'>
    >
  > {
    const whatWeDo = await this.whatWeDoRepository.findRegisters();

    return success({
      data: whatWeDo,
      message: 'WhatWeDo found successfully',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatWeDoEntity>, 'statusCode'>
    >
  > {
    const whatWeDo = await this.whatWeDoRepository.findRegister({
      language,
    });

    return success({
      data: whatWeDo,
      message: 'WhatWeDo found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateWhatWeDoDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatWeDoEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedWhatWeDo } = data;

    const whatWeDoExists = await this.whatWeDoRepository.findRegister({
      id,
    });

    if (!whatWeDoExists) {
      return failure({
        message: 'No whatWeDo found',
        success: false,
      });
    }

    const whatWeDo = await this.whatWeDoRepository.save({
      ...whatWeDoExists,
      ...updatedWhatWeDo,
    });

    return success({
      data: whatWeDo,
      message: 'WhatWeDo updated successfully',
      success: true,
    });
  }
}
