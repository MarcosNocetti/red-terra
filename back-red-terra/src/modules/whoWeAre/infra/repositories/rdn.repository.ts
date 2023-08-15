import { Injectable } from '@nestjs/common';
import { RdnEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IRdnRepository } from '../../interfaces';

@Injectable()
export class RdnRepository implements IRdnRepository {
  private repository: Repository<RdnEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(RdnEntity);
  }

  async save(data: Partial<RdnEntity>): Promise<RdnEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<RdnEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<RdnEntity>,
    selectConditions?: (keyof RdnEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<RdnEntity>, 'where' | 'select'>
    >,
  ): Promise<RdnEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<RdnEntity>,
    selectConditions?: (keyof RdnEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<RdnEntity>, 'where' | 'select'>
    >,
  ): Promise<RdnEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
