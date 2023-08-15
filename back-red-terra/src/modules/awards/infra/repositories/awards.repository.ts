import { Injectable } from '@nestjs/common';
import { AwardsEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { IAwardsRepository } from '../../interfaces';

@Injectable()
export class AwardsRepository implements IAwardsRepository {
  private repository: Repository<AwardsEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(AwardsEntity);
  }

  async save(data: Partial<AwardsEntity>): Promise<AwardsEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<AwardsEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<AwardsEntity>,
    selectConditions?: (keyof AwardsEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<AwardsEntity>, 'where' | 'select'>
    >,
  ): Promise<AwardsEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<AwardsEntity>,
    selectConditions?: (keyof AwardsEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<AwardsEntity>, 'where' | 'select'>
    >,
  ): Promise<AwardsEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
