import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { HomeEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { HomeService } from '../../services/home.service';
import { HomeDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async getHome(): Promise<IResponse<HomeEntity>> {
    const result = await this.homeService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createHome(@Body() data: HomeDto): Promise<IResponse<HomeEntity>> {
    const result = await this.homeService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateHome(
    @Param('id')
    id: string,
    @Body() data: HomeDto,
  ): Promise<IResponse<HomeEntity>> {
    const result = await this.homeService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
