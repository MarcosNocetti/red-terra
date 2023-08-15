import { Injectable } from '@nestjs/common';
import { WhatsHappeningEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhatsHappeningRepository } from '../infra/repositories';
import { UpdateWhatsHappeningDto } from '../interfaceAdapters/dto';
import { IWhatsHappening } from '../interfaces';

@Injectable()
export class WhatsHappeningService {
  constructor(
    private readonly whatsHappeningRepository: WhatsHappeningRepository,
  ) {}

  async create(
    data: IWhatsHappening,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>
    >
  > {
    const { language, ...whatsHappening } = data;

    const newWhatsHappening = await this.whatsHappeningRepository.save({
      ...whatsHappening,
      language,
    });

    return success({
      data: newWhatsHappening,
      message: 'Whats happening created successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatsHappeningEntity[]>, 'statusCode'>
    >
  > {
    const whatsHappening = await this.whatsHappeningRepository.findRegisters();

    return success({
      data: whatsHappening,
      message: 'Whats happening found successfully',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>
    >
  > {
    const whatsHappening = await this.whatsHappeningRepository.findRegister({
      language,
    });

    return success({
      data: whatsHappening,
      message: 'Whats happening found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateWhatsHappeningDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedWhatsHappening } = data;

    const whatsHappeningExists =
      await this.whatsHappeningRepository.findRegister({
        id,
      });

    if (!whatsHappeningExists) {
      return failure({
        message: 'No whatsHappening found',
        success: false,
      });
    }

    const whatsHappening = await this.whatsHappeningRepository.save({
      ...whatsHappeningExists,
      ...updatedWhatsHappening,
    });

    return success({
      data: whatsHappening,
      message: 'Whats happening updated successfully',
      success: true,
    });
  }
}
