import { Injectable } from '@nestjs/common';
import { HomeEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IHomeRepository } from '../../interfaces';

@Injectable()
export class HomeRepository implements IHomeRepository {
  private repository: Repository<HomeEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(HomeEntity);
  }

  async save(data: Partial<HomeEntity>): Promise<HomeEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<HomeEntity>,
    selectConditions?: (keyof HomeEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<HomeEntity>, 'where' | 'select'>
    >,
  ): Promise<HomeEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<HomeEntity>,
    selectConditions?: (keyof HomeEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<HomeEntity>, 'where' | 'select'>
    >,
  ): Promise<HomeEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
