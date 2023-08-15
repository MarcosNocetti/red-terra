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
import { RedCartaEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { RedCartaService } from '../../services';
import { RedCartaDto, UpdateRedCartaDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('redCarta')
export class RedCartaController {
  constructor(private readonly redCartaService: RedCartaService) {}

  @Get()
  async get(): Promise<IResponse<RedCartaEntity[]>> {
    const result = await this.redCartaService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createRedCarta(
    @Body() data: RedCartaDto,
  ): Promise<IResponse<RedCartaEntity>> {
    const result = await this.redCartaService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateRedCarta(
    @Param('id')
    id: string,
    @Body() data: UpdateRedCartaDto,
  ): Promise<IResponse<RedCartaEntity>> {
    const result = await this.redCartaService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteRedCarta(
    @Param('id')
    id: string,
  ): Promise<IResponse<RedCartaEntity>> {
    const result = await this.redCartaService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
