import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ContactEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { ContactService } from '../../services/contact.service';
import { ContactDto, UpdateContactDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get(':lang')
  async getContact(
    @Param('lang') language: LanguageType,
  ): Promise<IResponse<ContactEntity>> {
    const result = await this.contactService.getByLanguage(language);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get()
  async get(): Promise<IResponse<ContactEntity[]>> {
    const result = await this.contactService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createContact(
    @Body() data: ContactDto,
  ): Promise<IResponse<ContactEntity>> {
    const result = await this.contactService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateContact(
    @Param('id')
    id: string,
    @Body() data: UpdateContactDto,
  ): Promise<IResponse<ContactEntity>> {
    const result = await this.contactService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
