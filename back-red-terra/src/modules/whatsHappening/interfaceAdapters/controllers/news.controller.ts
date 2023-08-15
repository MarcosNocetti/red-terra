import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { NewsEntity, NewsRelationEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { NewsService } from '../../services';
import { NewsDto, UpdateNewsDto } from '../dto';
import { NewsRelationRepository } from '../../infra/repositories/newsRelation.repository';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly newsRelationRepository: NewsRelationRepository,
  ) {}

  @Get()
  async get(): Promise<IResponse<NewsEntity[]>> {
    const result = await this.newsService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get('/whatsHappening/:id')
  async getNewsByWhatsHappening(
    @Param('id') id: string,
  ): Promise<IResponse<NewsRelationEntity[]>> {
    try {
      const result = await this.newsRelationRepository.findRegisters([
        { newsBrId: id },
        { newsEnId: id },
      ]);

      return {
        data: result,
        success: true,
        message: 'News found successfully.',
        statusCode: HttpStatus['OK'],
      };
    } catch (e) {
      return {
        success: false,
        message: 'Error searching news.',
        statusCode: HttpStatus['NOT_ACCEPTABLE'],
      };
    }
  }

  @Post()
  async createNews(@Body() data: NewsDto): Promise<IResponse<NewsEntity>> {
    const result = await this.newsService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateNews(
    @Param('id')
    id: string,
    @Body() data: UpdateNewsDto,
  ): Promise<IResponse<NewsEntity>> {
    const result = await this.newsService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteNews(
    @Param('id')
    id: string,
  ): Promise<IResponse<NewsEntity>> {
    const result = await this.newsService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
