import { Injectable } from '@nestjs/common';
import { ContactEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { ContactRepository } from '../infra/repositories';
import { UpdateContactDto } from '../interfaceAdapters/dto';
import { IContact } from '../interfaces';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  async create(
    data: IContact,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<ContactEntity, 'language'>>, 'statusCode'>
    >
  > {
    const newContact = await this.contactRepository.save(data);

    return success({
      data: newContact,
      message: 'Contact created successfuly',
      success: true,
    });
  }

  async getByLanguage(
    language: LanguageType,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<ContactEntity, 'language'>>, 'statusCode'>
    >
  > {
    const contact = await this.contactRepository.findRegister({
      language,
    });

    if (!contact) {
      return failure({
        message: 'Contact not found',
        success: false,
      });
    }

    return success({
      data: contact,
      message: 'Contact found successfully',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<ContactEntity[], 'language'>>, 'statusCode'>
    >
  > {
    const contact = await this.contactRepository.findRegisters();

    if (!contact) {
      return failure({
        message: 'Contact not found',
        success: false,
      });
    }

    return success({
      data: contact,
      message: 'Contact found successfully',
      success: true,
    });
  }

  async update(
    data: UpdateContactDto,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<ContactEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedContact } = data;

    const contactExists = await this.contactRepository.findRegister({
      id,
    });

    if (!contactExists) {
      return failure({
        message: 'No contact found',
        success: false,
      });
    }

    const contact = await this.contactRepository.save({
      ...contactExists,
      ...updatedContact,
    });

    return success({
      data: contact,
      message: 'Contact updated successfully',
      success: true,
    });
  }
}
