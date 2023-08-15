import { Injectable } from '@nestjs/common';
import { RdnEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { RdnRepository } from '../infra/repositories';
import { UpdateRdnDto } from '../interfaceAdapters/dto';
import { IRdn } from '../interfaces';

@Injectable()
export class RdnService {
  constructor(private readonly rdnRepository: RdnRepository) {}

  async create(
    data: IRdn,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RdnEntity>, 'statusCode'>
    >
  > {
    const { language, ...rdn } = data;

    const newRdn = await this.rdnRepository.save({
      ...rdn,
      language,
    });

    return success({
      data: newRdn,
      message: 'Rdn created successfuly',
      success: true,
    });
  }

  async delete(
    rdnId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<RdnEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!rdnId?.length) {
      return failure({
        data: 'Rdn id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.rdnRepository.findRegister({ id: rdnId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${rdnId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.rdnRepository.delete(rdnId);

    return success({
      data: deletedId,
      message: 'Rdn deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RdnEntity[]>, 'statusCode'>
    >
  > {
    const rdn = await this.rdnRepository.findRegisters();

    if (!rdn) {
      return failure({
        message: 'No rdn found',
        success: false,
      });
    }

    return success({
      data: rdn,
      message: 'Rdn found successfully',
      success: true,
    });
  }

  async getByWhatWeDo(
    id: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RdnEntity>, 'statusCode'>
    >
  > {
    const rdn = await this.rdnRepository.findRegister({
      id,
    });

    if (!rdn) {
      return failure({
        message: 'No rdn found',
        success: false,
      });
    }

    return success({
      data: rdn,
      message: 'Rdn found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateRdnDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<RdnEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedRdn } = data;

    const rdnExists = await this.rdnRepository.findRegister({
      id,
    });

    if (!rdnExists) {
      return failure({
        message: 'No rdn found',
        success: false,
      });
    }

    const rdn = await this.rdnRepository.save({
      ...rdnExists,
      ...updatedRdn,
    });

    return success({
      data: rdn,
      message: 'Rdn updated successfully',
      success: true,
    });
  }
}
