import { Module } from '@nestjs/common';
import { HeadersService } from './services/headers.service';
import { HeadersController } from './interfaceAdapters/controllers/headers.controller';
import { HeaderRepository, HeaderLinkRepository } from './infra/repositories';

@Module({
  providers: [HeadersService, HeaderRepository, HeaderLinkRepository],
  controllers: [HeadersController],
})
export class HeadersModule {}
