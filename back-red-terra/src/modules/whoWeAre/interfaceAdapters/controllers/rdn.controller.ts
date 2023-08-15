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
import { RdnEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { RdnService } from '../../services';
import { RdnDto, UpdateRdnDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('rdn')
export class RdnController {
  constructor(private readonly rdnService: RdnService) {}

  @Get()
  async get(): Promise<IResponse<RdnEntity[]>> {
    const result = await this.rdnService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':id')
  async getRdnByWhatWeDo(
    @Param('id') id: string,
  ): Promise<IResponse<RdnEntity>> {
    const result = await this.rdnService.getByWhatWeDo(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createRdn(@Body() data: RdnDto): Promise<IResponse<RdnEntity>> {
    const result = await this.rdnService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateRdn(
    @Param('id')
    id: string,
    @Body() data: UpdateRdnDto,
  ): Promise<IResponse<RdnEntity>> {
    const result = await this.rdnService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteRdn(
    @Param('id')
    id: string,
  ): Promise<IResponse<RdnEntity>> {
    const result = await this.rdnService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
