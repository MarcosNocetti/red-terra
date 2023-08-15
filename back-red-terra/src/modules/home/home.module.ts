import { Module } from '@nestjs/common';
import { HomeService } from './services/home.service';
import { HomeController } from './interfaceAdapters/controllers/home.controller';
import { HomeRepository } from './infra/repositories';

@Module({
  providers: [HomeService, HomeRepository],
  controllers: [HomeController],
})
export class HomeModule {}
