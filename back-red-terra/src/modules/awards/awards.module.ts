import { Module } from '@nestjs/common';
import { AwardsService } from './services/awards.service';
import { AwardsController } from './interfaceAdapters/controllers/awards.controller';
import { AwardsRepository } from './infra/repositories';

@Module({
  providers: [AwardsService, AwardsRepository],
  controllers: [AwardsController],
})
export class AwardsModule {}
