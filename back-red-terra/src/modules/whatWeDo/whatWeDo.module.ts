import { Module } from '@nestjs/common';
import { WhatWeDoService } from './services/whatWeDo.service';
import { WhatWeDoController } from './interfaceAdapters/controllers/whatWeDo.controller';
import { WhatWeDoRepository, CreditsRepository } from './infra/repositories';
import { CreditsController } from './interfaceAdapters/controllers';
import { CreditsService } from './services';

@Module({
  providers: [
    WhatWeDoService,
    WhatWeDoRepository,
    CreditsService,
    CreditsRepository,
  ],
  controllers: [WhatWeDoController, CreditsController],
})
export class WhatWeDoModule {}
