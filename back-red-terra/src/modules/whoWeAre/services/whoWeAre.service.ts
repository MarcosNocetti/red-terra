import { Injectable } from '@nestjs/common';
import { WhoWeAreEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhoWeAreRepository } from '../infra/repositories';
import { UpdateWhoWeAreDto } from '../interfaceAdapters/dto';
import { IWhoWeAre } from '../interfaces';

@Injectable()
export class WhoWeAreService {
  constructor(private readonly whatWeDoRepository: WhoWeAreRepository) {}

  async create(
    data: IWhoWeAre,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhoWeAreEntity>, 'statusCode'>
    >
  > {
    const newWhoWeAre = await this.whatWeDoRepository.save(data);

    return success({
      data: newWhoWeAre,
      message: 'WhoWeAre created successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhoWeAreEntity[]>, 'statusCode'>
    >
  > {
    const whatWeDo = await this.whatWeDoRepository.findRegisters();

    if (!whatWeDo) {
      return failure({
        message: 'No whatWeDo found',
        success: false,
      });
    }

    return success({
      data: whatWeDo,
      message: 'WhoWeAre found successfully',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhoWeAreEntity>, 'statusCode'>
    >
  > {
    const whatWeDo = await this.whatWeDoRepository.findRegister({
      language,
    });

    if (!whatWeDo) {
      return failure({
        message: 'No whatWeDo found',
        success: false,
      });
    }

    return success({
      data: whatWeDo,
      message: 'WhoWeAre found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateWhoWeAreDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhoWeAreEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedWhoWeAre } = data;

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
      ...updatedWhoWeAre,
    });

    return success({
      data: whatWeDo,
      message: 'WhoWeAre updated successfully',
      success: true,
    });
  }
}
