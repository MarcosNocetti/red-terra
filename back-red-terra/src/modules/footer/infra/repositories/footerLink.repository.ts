import { Injectable } from '@nestjs/common';
import { FooterLinkEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IFooterLinkRepository } from '../../interfaces';

@Injectable()
export class FooterLinkRepository implements IFooterLinkRepository {
  private repository: Repository<FooterLinkEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(FooterLinkEntity);
  }

  async save(data: Partial<FooterLinkEntity>): Promise<FooterLinkEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<FooterLinkEntity>,
    selectConditions?: (keyof FooterLinkEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<FooterLinkEntity>, 'where' | 'select'>
    >,
  ): Promise<FooterLinkEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<FooterLinkEntity>,
    selectConditions?: (keyof FooterLinkEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<FooterLinkEntity>, 'where' | 'select'>
    >,
  ): Promise<FooterLinkEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
