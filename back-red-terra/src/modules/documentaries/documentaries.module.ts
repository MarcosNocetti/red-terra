import { Module } from '@nestjs/common';
import { DocumentaryService } from './services/documentary.service';
import { DocumentaryController } from './interfaceAdapters/controllers/documentary.controller';
import { DocumentaryRepository } from './infra/repositories';
import { DocumentaryRelationRepository } from './infra/repositories/documentaryRelation.repository';

@Module({
  providers: [DocumentaryService, DocumentaryRepository, DocumentaryRelationRepository],
  controllers: [DocumentaryController],
})
export class DocumentaryModule {}
