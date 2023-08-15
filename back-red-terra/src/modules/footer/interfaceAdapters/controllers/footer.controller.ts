import { UpdateFooterLinkDto } from './../dto/footerLink';
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
import { FooterEntity, FooterLinkEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { FooterService } from '../../services/footer.service';
import { FooterDto, FooterLinkDto, UpdateFooterDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Post()
  async createFooter(
    @Body() data: FooterDto,
  ): Promise<IResponse<FooterEntity>> {
    const result = await this.footerService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateFooter(
    @Param('id')
    id: string,
    @Body() data: UpdateFooterDto,
  ): Promise<IResponse<FooterEntity>> {
    const result = await this.footerService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post('/link')
  async createFooterLink(
    @Body() data: FooterLinkDto,
  ): Promise<IResponse<FooterLinkEntity>> {
    const result = await this.footerService.createLink(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Get()
  async getFooters(): Promise<IResponse<FooterEntity[]>> {
    const result = await this.footerService.getFooters();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get('/links')
  async getLinks(): Promise<IResponse<FooterLinkEntity[]>> {
    const result = await this.footerService.getLinks();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Patch('/links/:id')
  async updateLink(
    @Param('id')
    id: string,
    @Body() data: UpdateFooterLinkDto,
  ): Promise<IResponse<FooterLinkEntity>> {
    const result = await this.footerService.updateLink({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':lang')
  async getFooter(
    @Param('lang') language: LanguageType,
  ): Promise<IResponse<FooterEntity>> {
    const result = await this.footerService.getByLanguage(language);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
