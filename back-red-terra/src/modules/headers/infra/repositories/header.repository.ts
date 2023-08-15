import { Injectable } from '@nestjs/common';
import { HeaderEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IHeaderRepository } from '../../interfaces';

@Injectable()
export class HeaderRepository implements IHeaderRepository {
  private repository: Repository<HeaderEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(HeaderEntity);
  }

  async save(
    data: Partial<Omit<HeaderEntity, 'links'>>,
  ): Promise<HeaderEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<HeaderEntity>,
    selectConditions?: (keyof HeaderEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<HeaderEntity>, 'where' | 'select'>
    >,
  ): Promise<HeaderEntity> {
    return await this.repository.findOne({
      relations: ['links'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<HeaderEntity>,
    selectConditions?: (keyof HeaderEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<HeaderEntity>, 'where' | 'select'>
    >,
  ): Promise<HeaderEntity[]> {
    return await this.repository.find({
      relations: ['links'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
