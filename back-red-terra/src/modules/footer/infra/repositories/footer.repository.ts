import { Injectable } from '@nestjs/common';
import { FooterEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IFooterRepository } from '../../interfaces';

@Injectable()
export class FooterRepository implements IFooterRepository {
  private repository: Repository<FooterEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(FooterEntity);
  }

  async save(data: Partial<FooterEntity>): Promise<FooterEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<FooterEntity>,
    selectConditions?: (keyof FooterEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<FooterEntity>, 'where' | 'select'>
    >,
  ): Promise<FooterEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<FooterEntity>,
    selectConditions?: (keyof FooterEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<FooterEntity>, 'where' | 'select'>
    >,
  ): Promise<FooterEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      relations: ['links'],
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
