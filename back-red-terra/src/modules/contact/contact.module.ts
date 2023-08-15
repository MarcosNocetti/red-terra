import { Module } from '@nestjs/common';
import { ContactService } from './services/contact.service';
import { ContactController } from './interfaceAdapters/controllers/contact.controller';
import { ContactRepository } from './infra/repositories';

@Module({
  providers: [ContactService, ContactRepository],
  controllers: [ContactController],
})
export class ContactModule {}
