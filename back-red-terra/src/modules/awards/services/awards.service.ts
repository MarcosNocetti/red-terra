import { Injectable } from '@nestjs/common';
import { AwardsEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { AwardsRepository } from '../infra/repositories';
import { IAwards } from '../interfaces';

@Injectable()
export class AwardsService {
  constructor(private readonly awardsRepository: AwardsRepository) {}

  async create(
    data: IAwards,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!data?.documentaryId && !data?.whoWeAreId) {
      return failure({
        data: 'Award relation',
        message: 'Award must have a relation',
        success: false,
      });
    }

    const newAwards = await this.awardsRepository.save(data);

    return success({
      data: newAwards,
      message: 'Awards created successfuly',
      success: true,
    });
  }

  async delete(
    awardId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!awardId?.length) {
      return failure({
        data: 'Award id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.awardsRepository.findRegister({ id: awardId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${awardId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.awardsRepository.delete(awardId);

    return success({
      data: deletedId,
      message: 'Award deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>
    >
  > {
    const awards = await this.awardsRepository.findRegisters();

    if (!awards) {
      return failure({
        message: 'No awards found',
        success: false,
      });
    }

    return success({
      data: awards,
      message: 'Awards found successfully',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>
    >
  > {
    const awards = await this.awardsRepository.findRegister({
      language,
    });

    if (!awards) {
      return failure({
        message: 'No awards found',
        success: false,
      });
    }

    return success({
      data: awards,
      message: 'Awards found successfully',
      success: true,
    });
  }

  async getByWhoWeAre(
    whoWeAreId: string,
    language?: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>
    >
  > {
    const whereAward = language
      ? {
          whoWeAreId,
          language,
        }
      : {
          whoWeAreId,
        };

    const awards = await this.awardsRepository.findRegisters(whereAward);

    if (!awards.length) {
      return failure({
        message: 'No awards found',
        success: false,
      });
    }

    return success({
      data: awards,
      message: 'Awards found successfully',
      success: true,
    });
  }

  async getByDocumentary(
    documentaryId: string,
    language?: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>
    >
  > {
    const whereAward = language
      ? {
          documentaryId,
          language,
        }
      : {
          documentaryId,
        };

    const awards = await this.awardsRepository.findRegisters(whereAward);

    if (!awards.length) {
      return failure({
        message: 'No awards found',
        success: false,
      });
    }

    return success({
      data: awards,
      message: 'Awards found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<AwardsEntity, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<AwardsEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedAwards } = data;

    const awardsExists = await this.awardsRepository.findRegister({
      id,
    });

    if (!awardsExists) {
      return failure({
        message: 'No awards found',
        success: false,
      });
    }

    const awards = await this.awardsRepository.save({
      ...awardsExists,
      ...updatedAwards,
    });

    return success({
      data: awards,
      message: 'Awards updated successfully',
      success: true,
    });
  }
}
