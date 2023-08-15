import { Injectable } from '@nestjs/common';
import { RedCartaEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { RedCartaRepository } from '../infra/repositories';
import { UpdateRedCartaDto } from '../interfaceAdapters/dto';
import { IRedCarta } from '../interfaces';

@Injectable()
export class RedCartaService {
  constructor(private readonly redCartaRepository: RedCartaRepository) {}

  async create(
    data: IRedCarta,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RedCartaEntity>, 'statusCode'>
    >
  > {
    const { language, ...redCarta } = data;

    const newRedCarta = await this.redCartaRepository.save({
      ...redCarta,
      language,
    });

    return success({
      data: newRedCarta,
      message: 'RedCarta created successfuly',
      success: true,
    });
  }

  async delete(
    redCartaId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<RedCartaEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!redCartaId?.length) {
      return failure({
        data: 'RedCarta id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.redCartaRepository.findRegister({ id: redCartaId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${redCartaId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.redCartaRepository.delete(redCartaId);

    return success({
      data: deletedId,
      message: 'Red carta deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RedCartaEntity[]>, 'statusCode'>
    >
  > {
    const redCarta = await this.redCartaRepository.findRegisters();

    if (!redCarta) {
      return failure({
        message: 'No red carta found',
        success: false,
      });
    }

    return success({
      data: redCarta,
      message: 'RedCarta found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateRedCartaDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RedCartaEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedRedCarta } = data;

    const redCartaExists = await this.redCartaRepository.findRegister({
      id,
    });

    if (!redCartaExists) {
      return failure({
        message: 'No red carta found',
        success: false,
      });
    }

    const redCarta = await this.redCartaRepository.save({
      ...redCartaExists,
      ...updatedRedCarta,
    });

    return success({
      data: redCarta,
      message: 'RedCarta updated successfully',
      success: true,
    });
  }
}
