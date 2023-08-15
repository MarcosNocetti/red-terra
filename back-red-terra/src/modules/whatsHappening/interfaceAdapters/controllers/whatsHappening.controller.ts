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
import { WhatsHappeningEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhatsHappeningService } from '../../services';
import { WhatsHappeningDto, UpdateWhatsHappeningDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('whatsHappening')
export class WhatsHappeningController {
  constructor(private readonly whatsHappeningService: WhatsHappeningService) {}

  @Get()
  async get(): Promise<IResponse<WhatsHappeningEntity[]>> {
    const result = await this.whatsHappeningService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':lang')
  async getWhatsHappening(
    @Param('lang') language: LanguageType,
  ): Promise<IResponse<WhatsHappeningEntity>> {
    const result = await this.whatsHappeningService.getByLanguage(language);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createWhatsHappening(
    @Body() data: WhatsHappeningDto,
  ): Promise<IResponse<WhatsHappeningEntity>> {
    const result = await this.whatsHappeningService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateWhatsHappening(
    @Param('id')
    id: string,
    @Body() data: UpdateWhatsHappeningDto,
  ): Promise<IResponse<WhatsHappeningEntity>> {
    const result = await this.whatsHappeningService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
