import { Injectable } from '@nestjs/common';
import { ClientReviewEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { ClientReviewsRepository } from '../infra/repositories';
import { UpdateClientReviewsDto } from '../interfaceAdapters/dto';
import { IClientReviews } from '../interfaces';

@Injectable()
export class ClientReviewsService {
  constructor(
    private readonly clientReviewsRepository: ClientReviewsRepository,
  ) {}

  async create(
    data: IClientReviews,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<ClientReviewEntity>, 'statusCode'>
    >
  > {
    const { language, ...clientReviews } = data;

    const newClientReview = await this.clientReviewsRepository.save({
      ...clientReviews,
      language,
    });

    return success({
      data: newClientReview,
      message: 'Client review created successfuly',
      success: true,
    });
  }

  async delete(
    clientReviewId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<ClientReviewEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!clientReviewId?.length) {
      return failure({
        data: 'Client review id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (
      !(await this.clientReviewsRepository.findRegister({ id: clientReviewId }))
    ) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${clientReviewId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.clientReviewsRepository.delete(clientReviewId);

    return success({
      data: deletedId,
      message: 'Client review deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<ClientReviewEntity[]>, 'statusCode'>
    >
  > {
    const clientReviews = await this.clientReviewsRepository.findRegisters();

    if (!clientReviews) {
      return failure({
        message: 'No clientReviews found',
        success: false,
      });
    }

    return success({
      data: clientReviews,
      message: 'Client review found successfully',
      success: true,
    });
  }

  async getByWhatWeDo(
    id: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<ClientReviewEntity>, 'statusCode'>
    >
  > {
    const clientReviews = await this.clientReviewsRepository.findRegister({
      id,
    });

    if (!clientReviews) {
      return failure({
        message: 'No clientReviews found',
        success: false,
      });
    }

    return success({
      data: clientReviews,
      message: 'Client review found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateClientReviewsDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<ClientReviewEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedClientReview } = data;

    const clientReviewsExists = await this.clientReviewsRepository.findRegister(
      {
        id,
      },
    );

    if (!clientReviewsExists) {
      return failure({
        message: 'No clientReviews found',
        success: false,
      });
    }

    const clientReviews = await this.clientReviewsRepository.save({
      ...clientReviewsExists,
      ...updatedClientReview,
    });

    return success({
      data: clientReviews,
      message: 'Client review updated successfully',
      success: true,
    });
  }
}
