import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './interfaceAdapters/controllers/users.controller';
import { UserRepository } from './infra/repositories';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [forwardRef(() => AuthModule), JwtModule],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UserRepository],
})
export class UsersModule {}
