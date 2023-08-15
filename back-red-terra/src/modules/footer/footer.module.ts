import { Module } from '@nestjs/common';
import { FooterService } from './services/footer.service';
import { FooterController } from './interfaceAdapters/controllers/footer.controller';
import { FooterRepository, FooterLinkRepository } from './infra/repositories';

@Module({
  providers: [FooterService, FooterRepository, FooterLinkRepository],
  controllers: [FooterController],
})
export class FooterModule {}
