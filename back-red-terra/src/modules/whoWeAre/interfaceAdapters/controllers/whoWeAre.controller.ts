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
import { WhoWeAreEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhoWeAreService } from '../../services/whoWeAre.service';
import { WhoWeAreDto, UpdateWhoWeAreDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('whoWeAre')
export class WhoWeAreController {
  constructor(private readonly whoWeAreService: WhoWeAreService) {}

  @Get()
  async get(): Promise<IResponse<WhoWeAreEntity[]>> {
    const result = await this.whoWeAreService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':lang')
  async getWhoWeAre(
    @Param('lang') language: LanguageType,
  ): Promise<IResponse<WhoWeAreEntity>> {
    const result = await this.whoWeAreService.getByLanguage(language);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createWhoWeAre(
    @Body() data: WhoWeAreDto,
  ): Promise<IResponse<WhoWeAreEntity>> {
    const result = await this.whoWeAreService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateWhoWeAre(
    @Param('id')
    id: string,
    @Body() data: UpdateWhoWeAreDto,
  ): Promise<IResponse<WhoWeAreEntity>> {
    const result = await this.whoWeAreService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
