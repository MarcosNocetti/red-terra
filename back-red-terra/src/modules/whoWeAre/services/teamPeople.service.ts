import { Injectable } from '@nestjs/common';
import { TeamPeopleEntity } from 'src/entities';
import { Either, failure, success } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { TeamPeopleRepository } from '../infra/repositories';
import { UpdateTeamPeopleDto } from '../interfaceAdapters/dto';
import { ITeamPeople } from '../interfaces';

@Injectable()
export class TeamPeopleService {
  constructor(private readonly teamPeopleRepository: TeamPeopleRepository) {}

  async create(
    data: ITeamPeople,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<TeamPeopleEntity>, 'statusCode'>
    >
  > {
    const { language, ...teamPeople } = data;

    const newTeamPeople = await this.teamPeopleRepository.save({
      ...teamPeople,
      language,
    });

    return success({
      data: newTeamPeople,
      message: 'Team people created successfuly',
      success: true,
    });
  }

  async delete(
    teamPeopleId: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<Omit<TeamPeopleEntity, 'language'>>, 'statusCode'>
    >
  > {
    if (!teamPeopleId?.length) {
      return failure({
        data: 'Team people id',
        message: 'Must pass an id',
        success: false,
      });
    }

    if (!(await this.teamPeopleRepository.findRegister({ id: teamPeopleId }))) {
      return failure({
        data: 'Does not exist id',
        message: `ID: ${teamPeopleId} does not exist`,
        success: false,
      });
    }

    const deletedId = await this.teamPeopleRepository.delete(teamPeopleId);

    return success({
      data: deletedId,
      message: 'Team people deleted successfuly',
      success: true,
    });
  }

  async get(): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<TeamPeopleEntity[]>, 'statusCode'>
    >
  > {
    const teamPeople = await this.teamPeopleRepository.findRegisters();

    if (!teamPeople) {
      return failure({
        message: 'No teamPeople found',
        success: false,
      });
    }

    return success({
      data: teamPeople,
      message: 'Team people found successfully',
      success: true,
    });
  }

  async getByWhatWeDo(
    id: string,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<TeamPeopleEntity>, 'statusCode'>
    >
  > {
    const teamPeople = await this.teamPeopleRepository.findRegister({
      id,
    });

    if (!teamPeople) {
      return failure({
        message: 'No teamPeople found',
        success: false,
      });
    }

    return success({
      data: teamPeople,
      message: 'Team people found successfully',
      success: true,
    });
  }

  async update(
    data: Partial<Omit<UpdateTeamPeopleDto, BaseEntityOmitPropsType>>,
  ): Promise<
    Either<
      Omit<IResponse, 'statusCode'>,
      Omit<IResponse<TeamPeopleEntity>, 'statusCode'>
    >
  > {
    const { id, ...updatedTeamPeople } = data;

    const teamPeopleExists = await this.teamPeopleRepository.findRegister({
      id,
    });

    if (!teamPeopleExists) {
      return failure({
        message: 'No teamPeople found',
        success: false,
      });
    }

    const teamPeople = await this.teamPeopleRepository.save({
      ...teamPeopleExists,
      ...updatedTeamPeople,
    });

    return success({
      data: teamPeople,
      message: 'Team people updated successfully',
      success: true,
    });
  }
}
