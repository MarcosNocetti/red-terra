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
import { WhatWeDoEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhatWeDoService } from '../../services/whatWeDo.service';
import { WhatWeDoDto, UpdateWhatWeDoDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('whatWeDo')
export class WhatWeDoController {
  constructor(private readonly whatWeDoService: WhatWeDoService) {}

  @Get()
  async get(): Promise<IResponse<WhatWeDoEntity[]>> {
    const result = await this.whatWeDoService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':lang')
  async getWhatWeDo(
    @Param('lang') language: LanguageType,
  ): Promise<IResponse<WhatWeDoEntity>> {
    const result = await this.whatWeDoService.getByLanguage(language);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createWhatWeDo(
    @Body() data: WhatWeDoDto,
  ): Promise<IResponse<WhatWeDoEntity>> {
    const result = await this.whatWeDoService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateWhatWeDo(
    @Param('id')
    id: string,
    @Body() data: UpdateWhatWeDoDto,
  ): Promise<IResponse<WhatWeDoEntity>> {
    const result = await this.whatWeDoService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
