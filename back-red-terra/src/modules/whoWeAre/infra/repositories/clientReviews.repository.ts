import { Injectable } from '@nestjs/common';
import { ClientReviewEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IClientReviewsRepository } from '../../interfaces';

@Injectable()
export class ClientReviewsRepository implements IClientReviewsRepository {
  private repository: Repository<ClientReviewEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(ClientReviewEntity);
  }

  async save(data: Partial<ClientReviewEntity>): Promise<ClientReviewEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<ClientReviewEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<ClientReviewEntity>,
    selectConditions?: (keyof ClientReviewEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<ClientReviewEntity>, 'where' | 'select'>
    >,
  ): Promise<ClientReviewEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<ClientReviewEntity>,
    selectConditions?: (keyof ClientReviewEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<ClientReviewEntity>, 'where' | 'select'>
    >,
  ): Promise<ClientReviewEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
