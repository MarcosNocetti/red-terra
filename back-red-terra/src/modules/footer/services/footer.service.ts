import { UpdateFooterLinkDto } from './../interfaceAdapters/dto/footerLink';
import { Injectable } from '@nestjs/common';
import { FooterEntity, FooterLinkEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { FooterLinkRepository, FooterRepository } from '../infra/repositories';
import { UpdateFooterDto } from '../interfaceAdapters/dto';
import { IFooter, IFooterLink } from '../interfaces';

@Injectable()
export class FooterService {
  constructor(
    private readonly footerRepository: FooterRepository,
    private readonly footerLinkRepository: FooterLinkRepository,
  ) {}

  async create(
    data: IFooter,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterEntity>, 'statusCode'>
    >
  > {
    const { language } = data;

    if (!language) {
      return failure({
        data: 'Footer language',
        message: 'Footer must have a language',
        success: false,
      });
    }

    const newFooter = await this.footerRepository.save(data);

    return success({
      data: newFooter,
      message: 'Footer created successfuly',
      success: true,
    });
  }

  async createLink(
    data: IFooterLink,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterLinkEntity>, 'statusCode'>
    >
  > {
    const newFooter = await this.footerLinkRepository.save({
      ...data,
      footerId: '1',
    });

    return success({
      data: newFooter,
      message: 'Footer created successfuly',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterEntity>, 'statusCode'>
    >
  > {
    const footer = await this.footerRepository.findRegister({
      language,
    });

    return success({
      data: footer,
      message: 'Footer found successfully',
      success: true,
    });
  }

  async getFooters(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterEntity[]>, 'statusCode'>
    >
  > {
    const footers = await this.footerRepository.findRegisters();

    return success({
      data: footers,
      message: 'Footers found successfully',
      success: true,
    });
  }

  async getLinks(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterLinkEntity[]>, 'statusCode'>
    >
  > {
    const links = await this.footerLinkRepository.findRegisters();

    return success({
      data: links,
      message: 'Footer links found successfully',
      success: true,
    });
  }

  async update(
    data: UpdateFooterDto,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedFooter } = data;

    const footerExists = await this.footerRepository.findRegister({
      id,
    });

    if (!footerExists) {
      return failure({
        message: 'No footer found',
        success: false,
      });
    }

    const footer = await this.footerRepository.save({
      ...footerExists,
      ...updatedFooter,
    });

    return success({
      data: footer,
      message: 'Footer updated successfully',
      success: true,
    });
  }

  async updateLink(
    data: UpdateFooterLinkDto,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<FooterLinkEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedFooterLink } = data;

    const footerLinkExists = await this.footerLinkRepository.findRegister({
      id,
    });

    if (!footerLinkExists) {
      return failure({
        message: 'No footer link found',
        success: false,
      });
    }

    const footerLink = await this.footerLinkRepository.save({
      ...footerLinkExists,
      ...updatedFooterLink,
    });

    return success({
      data: footerLink,
      message: 'Footer link updated successfully',
      success: true,
    });
  }
}
