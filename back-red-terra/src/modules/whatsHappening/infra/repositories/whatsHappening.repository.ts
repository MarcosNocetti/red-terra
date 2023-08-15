import { Injectable } from '@nestjs/common';
import { WhatsHappeningEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IWhatsHappeningRepository } from '../../interfaces';

@Injectable()
export class WhatsHappeningRepository implements IWhatsHappeningRepository {
  private repository: Repository<WhatsHappeningEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(WhatsHappeningEntity);
  }

  async save(
    data: Partial<WhatsHappeningEntity>,
  ): Promise<WhatsHappeningEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<WhatsHappeningEntity>,
    selectConditions?: (keyof WhatsHappeningEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<WhatsHappeningEntity>, 'where' | 'select'>
    >,
  ): Promise<WhatsHappeningEntity> {
    return await this.repository.findOne({
      relations: ['news'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<WhatsHappeningEntity>,
    selectConditions?: (keyof WhatsHappeningEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<WhatsHappeningEntity>, 'where' | 'select'>
    >,
  ): Promise<WhatsHappeningEntity[]> {
    return await this.repository.find({
      relations: ['news'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
