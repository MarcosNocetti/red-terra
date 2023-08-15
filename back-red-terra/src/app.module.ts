import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { HeadersModule } from './modules/headers/headers.module';
import { UsersModule } from './modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { FooterModule } from './modules/footer/footer.module';
import { HomeModule } from './modules/home/home.module';
import { ContactModule } from './modules/contact/contact.module';
import { AwardsModule } from './modules/awards/awards.module';
import { WhatWeDoModule } from './modules/whatWeDo/whatWeDo.module';
import { WhoWeAreModule } from './modules/whoWeAre/whoWeAre.module';
import { WhatsHappeningModule } from './modules/whatsHappening/whatsHappening.module';
import { DocumentaryModule } from './modules/documentaries/documentaries.module';
import { HealthModule } from './modules/healthCheck/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    HeadersModule,
    UsersModule,
    FooterModule,
    HomeModule,
    ContactModule,
    AwardsModule,
    WhatWeDoModule,
    WhoWeAreModule,
    WhatsHappeningModule,
    DocumentaryModule,
    JwtModule,
    HealthModule,
  ],
})
export class AppModule {}
