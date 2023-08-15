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
import { CreditEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { CreditsService } from '../../services';
import { CreditsDto, UpdateCreditsDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get()
  async get(): Promise<IResponse<CreditEntity[]>> {
    const result = await this.creditsService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':id')
  async getCreditsByWhatWeDo(
    @Param('id') id: string,
  ): Promise<IResponse<CreditEntity>> {
    const result = await this.creditsService.getByWhatWeDo(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createCredits(
    @Body() data: CreditsDto,
  ): Promise<IResponse<CreditEntity>> {
    const result = await this.creditsService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateCredits(
    @Param('id')
    id: string,
    @Body() data: UpdateCreditsDto,
  ): Promise<IResponse<CreditEntity>> {
    const result = await this.creditsService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteCredit(
    @Param('id')
    id: string,
  ): Promise<IResponse<CreditEntity>> {
    const result = await this.creditsService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
