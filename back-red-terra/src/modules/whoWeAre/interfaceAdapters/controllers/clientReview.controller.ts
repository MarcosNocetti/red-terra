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
import { ClientReviewEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { ClientReviewsService } from '../../services';
import { ClientReviewsDto, UpdateClientReviewsDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('clientReview')
export class ClientReviewController {
  constructor(private readonly clientReviewService: ClientReviewsService) {}

  @Get()
  async get(): Promise<IResponse<ClientReviewEntity[]>> {
    const result = await this.clientReviewService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':id')
  async getClientReview(
    @Param('id') id: string,
  ): Promise<IResponse<ClientReviewEntity>> {
    const result = await this.clientReviewService.getByWhatWeDo(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createClientReview(
    @Body() data: ClientReviewsDto,
  ): Promise<IResponse<ClientReviewEntity>> {
    const result = await this.clientReviewService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateClientReview(
    @Param('id')
    id: string,
    @Body() data: UpdateClientReviewsDto,
  ): Promise<IResponse<ClientReviewEntity>> {
    const result = await this.clientReviewService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteClientReview(
    @Param('id')
    id: string,
  ): Promise<IResponse<ClientReviewEntity>> {
    const result = await this.clientReviewService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
