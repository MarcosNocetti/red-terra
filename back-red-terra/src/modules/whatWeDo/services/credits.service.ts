import { Injectable } from '@nestjs/common';
import { CreditEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { CreditsRepository } from '../infra/repositories';
import { UpdateCreditsDto } from '../interfaceAdapters/dto';
import { ICredits } from '../interfaces';

@Injectable()
export class CreditsService {
  constructor(private readonly creditsRepository: CreditsRepository) {}

  async create(
    data: ICredits,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<CreditEntity>, 'statusCode'>
    >
  > {
    const { language, ...credits } = data;

    const newCredit = await this.creditsRepository.save({
      ...credits,
      language,
    });

    return success({
      data: newCredit,
      message: 'Credit created successfuly',
      success: true,
    });
  }

  async delete(
    creditId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<CreditEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!creditId?.length) {
      return failure({
        data: 'Credit id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.creditsRepository.findRegister({ id: creditId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${creditId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.creditsRepository.delete(creditId);

    return success({
      data: deletedId,
      message: 'Credit deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<CreditEntity[]>, 'statusCode'>
    >
  > {
    const credits = await this.creditsRepository.findRegisters();

    if (!credits) {
      return failure({
        message: 'No credits found',
        success: false,
      });
    }

    return success({
      data: credits,
      message: 'Credit found successfully',
      success: true,
    });
  }

  async getByWhatWeDo(
    id: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<CreditEntity>, 'statusCode'>
    >
  > {
    const credits = await this.creditsRepository.findRegister({
      id,
    });

    if (!credits) {
      return failure({
        message: 'No credits found',
        success: false,
      });
    }

    return success({
      data: credits,
      message: 'Credit found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateCreditsDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<CreditEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedCredit } = data;

    const creditsExists = await this.creditsRepository.findRegister({
      id,
    });

    if (!creditsExists) {
      return failure({
        message: 'No credits found',
        success: false,
      });
    }

    const credits = await this.creditsRepository.save({
      ...creditsExists,
      ...updatedCredit,
    });

    return success({
      data: credits,
      message: 'Credit updated successfully',
      success: true,
    });
  }
}
