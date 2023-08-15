import { Injectable } from '@nestjs/common';
import { CreditEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { ICreditsRepository } from '../../interfaces';

@Injectable()
export class CreditsRepository implements ICreditsRepository {
  private repository: Repository<CreditEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(CreditEntity);
  }

  async save(data: Partial<CreditEntity>): Promise<CreditEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<CreditEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<CreditEntity>,
    selectConditions?: (keyof CreditEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<CreditEntity>, 'where' | 'select'>
    >,
  ): Promise<CreditEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<CreditEntity>,
    selectConditions?: (keyof CreditEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<CreditEntity>, 'where' | 'select'>
    >,
  ): Promise<CreditEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
