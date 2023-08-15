import { Module } from '@nestjs/common';
import {
  ClientReviewsRepository,
  RdnRepository,
  TeamPeopleRepository,
  WhoWeAreRepository,
} from './infra/repositories';
import {
  ClientReviewController,
  TeamPeopleController,
  RdnController,
  WhoWeAreController,
} from './interfaceAdapters/controllers';
import {
  ClientReviewsService,
  RdnService,
  TeamPeopleService,
  WhoWeAreService,
} from './services';

@Module({
  providers: [
    ClientReviewsRepository,
    ClientReviewsService,
    TeamPeopleRepository,
    TeamPeopleService,
    RdnRepository,
    RdnService,
    WhoWeAreRepository,
    WhoWeAreService,
  ],
  controllers: [
    ClientReviewController,
    TeamPeopleController,
    RdnController,
    WhoWeAreController,
  ],
})
export class WhoWeAreModule {}
