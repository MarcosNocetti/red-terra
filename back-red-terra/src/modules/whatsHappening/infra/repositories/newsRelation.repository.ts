import { Injectable } from '@nestjs/common';
import { NewsRelationEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { INewsRelationRepository } from '../../interfaces';

@Injectable()
export class NewsRelationRepository implements INewsRelationRepository {
  private repository: Repository<NewsRelationEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(NewsRelationEntity);
  }

  async save(data: Partial<NewsRelationEntity>): Promise<NewsRelationEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<NewsRelationEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: any,
    selectConditions?: (keyof NewsRelationEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<NewsRelationEntity>, 'where' | 'select'>
    >,
  ): Promise<NewsRelationEntity> {
    return await this.repository.findOne({
      relations: ['newsEn', 'newsBr'],
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions,
    });
  }

  async findRelation(id: string): Promise<NewsRelationEntity> {
    return await this.repository.findOne({
      relations: ['newsEn', 'newsBr'],
      where: [
        {
          newsEnId: id,
        },
        {
          newsBrId: id,
        },
      ],
    });
  }

  async findRegisters(
    whereConditions?: any,
    selectConditions?: (keyof NewsRelationEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<NewsRelationEntity>, 'where' | 'select'>
    >,
  ): Promise<NewsRelationEntity[]> {
    return await this.repository.find({
      relations: ['newsEn', 'newsBr'],
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions,
    });
  }
}
