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
import { AwardsEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { AwardsService } from '../../services/awards.service';
import { AwardsDto, UpdateAwardsDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Get('')
  async getAwards(): Promise<IResponse<AwardsEntity[]>> {
    const result = await this.awardsService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':lang')
  async getAwardsByLang(
    @Param('lang') language: LanguageType,
    @Body() data: { whoWeAreId?: string; documentaryId?: string },
  ): Promise<IResponse<AwardsEntity>> {
    let result;
    if (!data) {
      result = await this.awardsService.getByLanguage(language);
    } else if (data?.whoWeAreId) {
      result = await this.awardsService.getByWhoWeAre(
        data.whoWeAreId,
        language,
      );
    } else if (data?.documentaryId) {
      result = await this.awardsService.getByDocumentary(
        data.documentaryId,
        language,
      );
    } else {
      return {
        data: 'Award relation',
        message: 'To get an award you must pass it relation id',
        success: false,
        statusCode: HttpStatus['NOT_ACCEPTABLE'],
      };
    }

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createAwards(
    @Body() data: AwardsDto,
  ): Promise<IResponse<AwardsEntity>> {
    const result = await this.awardsService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateAwards(
    @Param('id')
    id: string,
    @Body() data: UpdateAwardsDto,
  ): Promise<IResponse<AwardsEntity>> {
    const result = await this.awardsService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteAward(
    @Param('id')
    id: string,
  ): Promise<IResponse<AwardsEntity>> {
    const result = await this.awardsService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
