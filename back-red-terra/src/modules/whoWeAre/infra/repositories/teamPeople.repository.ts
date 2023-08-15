import { Injectable } from '@nestjs/common';
import { TeamPeopleEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { ITeamPeopleRepository } from '../../interfaces';

@Injectable()
export class TeamPeopleRepository implements ITeamPeopleRepository {
  private repository: Repository<TeamPeopleEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(TeamPeopleEntity);
  }

  async save(data: Partial<TeamPeopleEntity>): Promise<TeamPeopleEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<TeamPeopleEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<TeamPeopleEntity>,
    selectConditions?: (keyof TeamPeopleEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<TeamPeopleEntity>, 'where' | 'select'>
    >,
  ): Promise<TeamPeopleEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<TeamPeopleEntity>,
    selectConditions?: (keyof TeamPeopleEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<TeamPeopleEntity>, 'where' | 'select'>
    >,
  ): Promise<TeamPeopleEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
