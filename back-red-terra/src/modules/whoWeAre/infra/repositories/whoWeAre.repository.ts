import { Injectable } from '@nestjs/common';
import { WhoWeAreEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IWhoWeAreRepository } from '../../interfaces';

@Injectable()
export class WhoWeAreRepository implements IWhoWeAreRepository {
  private repository: Repository<WhoWeAreEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(WhoWeAreEntity);
  }

  async save(data: Partial<WhoWeAreEntity>): Promise<WhoWeAreEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<WhoWeAreEntity>,
    selectConditions?: (keyof WhoWeAreEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<WhoWeAreEntity>, 'where' | 'select'>
    >,
  ): Promise<WhoWeAreEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<WhoWeAreEntity>,
    selectConditions?: (keyof WhoWeAreEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<WhoWeAreEntity>, 'where' | 'select'>
    >,
  ): Promise<WhoWeAreEntity[]> {
    return await this.repository.find({
      relations: ['clientReviews', 'rdns', 'teamPeople'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
