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
import { HeaderEntity, HeaderLinkEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { HeadersService } from '../../services/headers.service';
import {
  HeaderDto,
  HeaderLinkDto,
  UpdateHeaderDto,
  UpdateHeaderLinkDto,
} from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('headers')
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Get(':lang')
  async getHeader(
    @Param('lang') lang: LanguageType,
  ): Promise<IResponse<HeaderEntity>> {
    const result = await this.headersService.getByLang(lang);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get()
  async getHeaders(): Promise<IResponse<HeaderEntity[]>> {
    const result = await this.headersService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createHeader(
    @Body() data: HeaderDto,
  ): Promise<IResponse<HeaderEntity>> {
    const result = await this.headersService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Post('/link')
  async createLink(
    @Body() data: HeaderLinkDto,
  ): Promise<IResponse<HeaderLinkEntity>> {
    const result = await this.headersService.createLink(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateHeader(
    @Param('id')
    id: string,
    @Body() data: UpdateHeaderDto,
  ): Promise<IResponse<HeaderEntity>> {
    const result = await this.headersService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
