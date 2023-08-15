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
import { DocumentaryEntity, DocumentaryRelationEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { DocumentaryService } from '../../services';
import { DocumentaryDto, UpdateDocumentaryDto } from '../dto';
import { DocumentaryRelationRepository } from '../../infra/repositories/documentaryRelation.repository';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('documentary')
export class DocumentaryController {
  constructor(
    private readonly documentaryService: DocumentaryService,
    private readonly documentaryRelationRepository: DocumentaryRelationRepository,
  ) {}

  @Get()
  async getDocumentary(): Promise<IResponse<DocumentaryEntity[]>> {
    const result = await this.documentaryService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':id')
  async getDocumentaryByRelation(
    @Param('id')
    id: string,
  ): Promise<IResponse<DocumentaryRelationEntity[]>> {
    try {
      const result = await this.documentaryRelationRepository.findRegisters([
        { documentaryBrId: id },
        { documentaryEnId: id },
      ]);

      return {
        data: result,
        success: true,
        message: 'Documentaries found successfully.',
        statusCode: HttpStatus['OK'],
      };
    } catch (e) {
      return {
        success: false,
        message: 'Error searching documentaries.',
        statusCode: HttpStatus['NOT_ACCEPTABLE'],
      };
    }
  }

  @Post()
  async createDocumentary(
    @Body() data: DocumentaryDto,
  ): Promise<IResponse<DocumentaryEntity>> {
    const result = await this.documentaryService.create(data);
    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateDocumentary(
    @Param('id')
    id: string,
    @Body() data: UpdateDocumentaryDto,
  ): Promise<IResponse<DocumentaryEntity>> {
    const result = await this.documentaryService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteDocumentary(
    @Param('id')
    id: string,
  ): Promise<IResponse<DocumentaryEntity>> {
    const result = await this.documentaryService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
