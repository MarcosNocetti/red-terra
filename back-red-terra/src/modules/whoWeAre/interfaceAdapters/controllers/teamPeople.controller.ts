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
import { TeamPeopleEntity } from 'src/entities';
import { AuthenticatedGuard } from 'src/modules/auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { TeamPeopleService } from '../../services';
import { TeamPeopleDto, UpdateTeamPeopleDto } from '../dto';

@UseGuards(AuthenticatedGuard)
@UseGuards(JwtAuthGuard)
@Controller('teamPeople')
export class TeamPeopleController {
  constructor(private readonly teamPeopleService: TeamPeopleService) {}

  @Get()
  async get(): Promise<IResponse<TeamPeopleEntity[]>> {
    const result = await this.teamPeopleService.get();

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Get(':id')
  async getTeamPeopleByWhatWeDo(
    @Param('id') id: string,
  ): Promise<IResponse<TeamPeopleEntity>> {
    const result = await this.teamPeopleService.getByWhatWeDo(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Post()
  async createTeamPeople(
    @Body() data: TeamPeopleDto,
  ): Promise<IResponse<TeamPeopleEntity>> {
    const result = await this.teamPeopleService.create(data);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['CREATED'],
    };
  }

  @Patch(':id')
  async updateTeamPeople(
    @Param('id')
    id: string,
    @Body() data: UpdateTeamPeopleDto,
  ): Promise<IResponse<TeamPeopleEntity>> {
    const result = await this.teamPeopleService.update({ ...data, id });

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }

  @Delete(':id')
  async deleteTeamPeople(
    @Param('id')
    id: string,
  ): Promise<IResponse<TeamPeopleEntity>> {
    const result = await this.teamPeopleService.delete(id);

    return {
      ...result.value,
      statusCode: result.isFailure()
        ? HttpStatus['NOT_ACCEPTABLE']
        : HttpStatus['OK'],
    };
  }
}
