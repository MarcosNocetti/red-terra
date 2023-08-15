import { Injectable } from '@nestjs/common';
import { RedCartaEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IRedCartaRepository } from '../../interfaces';

@Injectable()
export class RedCartaRepository implements IRedCartaRepository {
  private repository: Repository<RedCartaEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(RedCartaEntity);
  }

  async save(data: Partial<RedCartaEntity>): Promise<RedCartaEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<RedCartaEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<RedCartaEntity>,
    selectConditions?: (keyof RedCartaEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<RedCartaEntity>, 'where' | 'select'>
    >,
  ): Promise<RedCartaEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<RedCartaEntity>,
    selectConditions?: (keyof RedCartaEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<RedCartaEntity>, 'where' | 'select'>
    >,
  ): Promise<RedCartaEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
