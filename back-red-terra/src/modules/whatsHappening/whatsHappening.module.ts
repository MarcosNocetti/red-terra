import { Module } from '@nestjs/common';
import { WhatsHappeningService } from './services/whatsHappening.service';
import { WhatsHappeningController } from './interfaceAdapters/controllers/whatsHappening.controller';
import { WhatsHappeningRepository, NewsRepository } from './infra/repositories';
import { NewsController } from './interfaceAdapters/controllers';
import { NewsService } from './services';
import { NewsRelationRepository } from './infra/repositories/newsRelation.repository';

@Module({
  providers: [
    WhatsHappeningService,
    WhatsHappeningRepository,
    NewsService,
    NewsRepository,
    NewsRelationRepository,
  ],
  controllers: [WhatsHappeningController, NewsController],
})
export class WhatsHappeningModule {}
