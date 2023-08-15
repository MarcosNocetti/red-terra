import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces/response.interface';
import { UsersService } from '../../services/users.service';
import { UserDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/id/:id')
  async getById(
    @Param('id') id: string,
  ): Promise<IResponse<Omit<UserEntity, 'password'>>> {
    const result = await this.usersService.get({ id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? result.value.message.includes('No')
          ? HttpStatus['NOT_FOUND']
          : HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get('/email/:email')
  async getByEmail(
    @Param('email') email: string,
  ): Promise<IResponse<Omit<UserEntity, 'password'>>> {
    const result = await this.usersService.get({ email });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? result.value.message.includes('No')
          ? HttpStatus['NOT_FOUND']
          : HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get('/name/:name')
  async getByName(
    @Param('name') name: string,
  ): Promise<IResponse<Omit<UserEntity, 'password'>[]>> {
    const result = await this.usersService.getAll({ name });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? result.value.message.includes('No')
          ? HttpStatus['NOT_FOUND']
          : HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get()
  async getAll(): Promise<IResponse<Omit<UserEntity, 'password'>[]>> {
    const result = await this.usersService.getAll();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async create(
    @Body() data: UserDto,
  ): Promise<IResponse<Omit<UserEntity, 'password'>>> {
    const result = await this.usersService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async update(
    @Body() data: Partial<UserDto>,
    @Param('id') id: string,
  ): Promise<IResponse<Omit<UserEntity, 'password'>>> {
    const result = await this.usersService.updateRegister({ id }, data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ): Promise<IResponse<UserEntity>> {
    const result = await this.usersService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
