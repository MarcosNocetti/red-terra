import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { AllExceptionsFilter } from '../../../shared/errors';

@Controller()
@UseFilters(new AllExceptionsFilter())
export class HealthController {
  constructor(private readonly appService: AppService) {}

  @Get('/health_check')
  async getHealth(): Promise<any> {
    return await this.appService.getHealth();
  }
}
