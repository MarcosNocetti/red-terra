import { Injectable } from '@nestjs/common';
import { NewsEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { INewsRepository } from '../../interfaces';

@Injectable()
export class NewsRepository implements INewsRepository {
  private repository: Repository<NewsEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(NewsEntity);
  }

  async save(data: Partial<NewsEntity>): Promise<NewsEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<NewsEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<NewsEntity>,
    selectConditions?: (keyof NewsEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<NewsEntity>, 'where' | 'select'>
    >,
  ): Promise<NewsEntity> {
    return await this.repository.findOne({
      order: { createdAt: 'desc' },
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<NewsEntity>,
    selectConditions?: (keyof NewsEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<NewsEntity>, 'where' | 'select'>
    >,
  ): Promise<NewsEntity[]> {
    return await this.repository.find({
      order: { createdAt: 'desc' },
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
