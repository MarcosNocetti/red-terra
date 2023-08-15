import { Injectable } from '@nestjs/common';
import { WhatWeDoEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IWhatWeDoRepository } from '../../interfaces';

@Injectable()
export class WhatWeDoRepository implements IWhatWeDoRepository {
  private repository: Repository<WhatWeDoEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(WhatWeDoEntity);
  }

  async save(data: Partial<WhatWeDoEntity>): Promise<WhatWeDoEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<WhatWeDoEntity>,
    selectConditions?: (keyof WhatWeDoEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<WhatWeDoEntity>, 'where' | 'select'>
    >,
  ): Promise<WhatWeDoEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<WhatWeDoEntity>,
    selectConditions?: (keyof WhatWeDoEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<WhatWeDoEntity>, 'where' | 'select'>
    >,
  ): Promise<WhatWeDoEntity[]> {
    return await this.repository.find({
      relations: ['credits', 'documentaries'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
