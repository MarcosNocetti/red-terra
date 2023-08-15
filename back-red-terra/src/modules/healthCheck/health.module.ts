import { Module } from '@nestjs/common';
import { HealthController } from '../healthCheck/controller/health.controller';
import { AppService } from './controller/app.service';

@Module({
  providers: [AppService],
  controllers: [HealthController],
})
export class HealthModule {}
