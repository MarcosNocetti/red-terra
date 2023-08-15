import { Injectable } from '@nestjs/common';
import { DocumentaryEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { DocumentaryRepository } from '../infra/repositories';
import { IDocumentary } from '../interfaces';
import { DocumentaryRelationRepository } from '../infra/repositories/documentaryRelation.repository';

@Injectable()
export class DocumentaryService {
  constructor(
    private readonly documentaryRepository: DocumentaryRepository,
    private readonly documentaryRelationRepository: DocumentaryRelationRepository,
  ) {}

  async create(
    data: IDocumentary,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>
    >
  > {
    const { videoUrl, language } = data;
    const { relationId, ...documentary } = data;
    if (!videoUrl?.length) {
      return failure({
        data: 'Documentary video url',
        message: 'Documentary must have a video url',
        success: false,
      });
    }

    if (!(await this.documentaryRepository.findRegister({ id: relationId }))) {
      return failure({
        data: `Documentary ${relationId} does not exists`,
        message: `Documentary ${relationId} does not exists`,
        success: false,
      });
    }

    let url: string;
    if (videoUrl.includes('vimeo')) {
      const code = videoUrl.split('/').pop();
      url = `https://player.vimeo.com/video/${code}`;
    } else {
      url = videoUrl;
    }

    const newDocumentary = await this.documentaryRepository.save({
      ...documentary,
      videoUrl: url,
    });

    if (relationId?.length) {
      this.documentaryRelationRepository.save({
        documentaryBrId: language === 'br' ? newDocumentary.id : relationId,
        documentaryEnId: language === 'en' ? newDocumentary.id : relationId,
      });
    }

    return success({
      data: newDocumentary,
      message: 'Documentary created successfuly',
      success: true,
    });
  }

  async delete(
    documentaryId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!documentaryId?.length) {
      return failure({
        data: 'Documentary id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (
      !(await this.documentaryRepository.findRegister({ id: documentaryId }))
    ) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${documentaryId} does not exist`,
        success: false,
      });
    }

    const relation = await this.documentaryRelationRepository.findRegister([
      { documentaryEnId: documentaryId },
      { documentaryBrId: documentaryId },
    ]);

    if (relation) {
      await this.documentaryRelationRepository.delete(relation.id);
    }

    const deletedId = await this.documentaryRepository.delete(documentaryId);

    return success({
      data: deletedId,
      message: 'Documentary deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<DocumentaryEntity[], 'language'>>, 'statusCode'>
    >
  > {
    const documentary = await this.documentaryRepository.findRegisters();

    if (!documentary) {
      return failure({
        message: 'No documentary found',
        success: false,
      });
    }

    return success({
      data: documentary,
      message: 'Documentary found successfully',
      success: true,
    });
  }

  async update(
    data: any,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>
    >
  > {
    const { id, relationId, language, ...updatedDocumentary } = data;

    if (!(await this.documentaryRepository.findRegister({ id: relationId }))) {
      return failure({
        data: `Documentary ${relationId} does not exists`,
        message: `Documentary ${relationId} does not exists`,
        success: false,
      });
    }

    const documentaryExists = await this.documentaryRepository.findRegister({
      id,
    });

    if (!documentaryExists) {
      return failure({
        message: 'No documentary found',
        success: false,
      });
    }

    if (relationId?.length) {
      if (
        !(await this.documentaryRepository.findRegister({ id: relationId }))
      ) {
        return failure({
          data: `Documentary ${relationId} does not exists`,
          message: `Documentary ${relationId} does not exists`,
          success: false,
        });
      } else if (
        !(await this.documentaryRelationRepository.findRegister([
          { documentaryBrId: relationId },
          { documentaryEnId: relationId },
        ]))
      ) {
        this.documentaryRelationRepository.save({
          documentaryBrId: language === 'br' ? id : relationId,
          documentaryEnId: language === 'en' ? id : relationId,
        });
      }
    }

    let url: string;
    if (!updatedDocumentary.videoUrl?.length) {
      url = documentaryExists.videoUrl;
    } else if (updatedDocumentary.videoUrl.includes('vimeo')) {
      const code = updatedDocumentary.videoUrl.split('/').pop();
      url = `https://player.vimeo.com/video/${code}`;
    } else {
      url = updatedDocumentary.videoUrl;
    }

    const documentary = await this.documentaryRepository.save({
      ...documentaryExists,
      ...updatedDocumentary,
      videoUrl: url,
    });

    return success({
      data: documentary,
      message: 'Documentary updated successfully',
      success: true,
    });
  }
}
