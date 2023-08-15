import { Injectable } from '@nestjs/common';
import { HeaderEntity, HeaderLinkEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { HeaderLinkRepository, HeaderRepository } from '../infra/repositories';
import { UpdateHeaderDto } from '../interfaceAdapters/dto';
import { IHeader, IHeaderLink } from '../interfaces';

@Injectable()
export class HeadersService {
  constructor(
    private readonly headerRepository: HeaderRepository,
    private readonly headerLinkRepository: HeaderLinkRepository,
  ) {}

  async create(
    data: IHeader,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HeaderEntity>, 'statusCode'>
    >
  > {
    const newHeader = await this.headerRepository.save(data);

    return success({
      data: newHeader,
      message: 'Header created successfuly',
      success: true,
    });
  }

  async createLink(
    data: IHeaderLink,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HeaderLinkEntity>, 'statusCode'>
    >
  > {
    const newHeader = await this.headerLinkRepository.save(data);

    return success({
      data: newHeader,
      message: 'Header created successfuly',
      success: true,
    });
  }

  async getByLang(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HeaderEntity>, 'statusCode'>
    >
  > {
    const header = await this.headerRepository.findRegister({
      language,
    });

    const langHeader = {
      ...header,
      links: header.links.filter((link) => link.language === language),
    };

    return success({
      data: langHeader,
      message: 'Header found successfully',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HeaderEntity[]>, 'statusCode'>
    >
  > {
    const header = await this.headerRepository.findRegisters();

    return success({
      data: header,
      message: 'Header found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateHeaderDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<HeaderEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedHeader } = data;

    const headerExists = await this.headerRepository.findRegister({
      id,
    });

    if (!headerExists) {
      return failure({
        message: 'No header found',
        success: false,
      });
    }

    const header = await this.headerRepository.save({
      ...headerExists,
      ...updatedHeader,
    });

    return success({
      data: header,
      message: 'Header updated successfully',
      success: true,
    });
  }
}
