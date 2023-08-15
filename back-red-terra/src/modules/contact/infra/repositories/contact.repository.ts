import { Injectable } from '@nestjs/common';
import { ContactEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IContactRepository } from '../../interfaces';

@Injectable()
export class ContactRepository implements IContactRepository {
  private repository: Repository<ContactEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(ContactEntity);
  }

  async save(data: Partial<ContactEntity>): Promise<ContactEntity> {
    return await this.repository.save(data);
  }

  async findRegister(
    whereConditions: Partial<ContactEntity>,
    selectConditions?: (keyof ContactEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<ContactEntity>, 'where' | 'select'>
    >,
  ): Promise<ContactEntity> {
    return await this.repository.findOne({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<ContactEntity>,
    selectConditions?: (keyof ContactEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<ContactEntity>, 'where' | 'select'>
    >,
  ): Promise<ContactEntity[]> {
    return await this.repository.find({
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
