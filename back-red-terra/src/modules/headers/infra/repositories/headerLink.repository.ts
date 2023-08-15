import { Injectable } from '@nestjs/common';
import { HeaderLinkEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IHeaderLinkRepository } from '../../interfaces';

@Injectable()
export class HeaderLinkRepository implements IHeaderLinkRepository {
  private repository: Repository<HeaderLinkEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(HeaderLinkEntity);
  }

  async save(data: Partial<HeaderLinkEntity>): Promise<HeaderLinkEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<HeaderLinkEntity>,
    selectConditions?: (keyof HeaderLinkEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<HeaderLinkEntity>, 'where' | 'select'>
    >,
  ): Promise<HeaderLinkEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<HeaderLinkEntity>,
    selectConditions?: (keyof HeaderLinkEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<HeaderLinkEntity>, 'where' | 'select'>
    >,
  ): Promise<HeaderLinkEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
