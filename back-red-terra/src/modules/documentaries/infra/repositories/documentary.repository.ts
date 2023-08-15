import { Injectable } from '@nestjs/common';
import { DocumentaryEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IDocumentaryRepository } from '../../interfaces';

@Injectable()
export class DocumentaryRepository implements IDocumentaryRepository {
  private repository: Repository<DocumentaryEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(DocumentaryEntity);
  }

  async save(data: Partial<DocumentaryEntity>): Promise<DocumentaryEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<DocumentaryEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: Partial<DocumentaryEntity>,
    selectConditions?: (keyof DocumentaryEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<DocumentaryEntity>, 'where' | 'select'>
    >,
  ): Promise<DocumentaryEntity> {
    return await this.repository.findOne({
      relations: ['awards'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }

  async findRegisters(
    whereConditions?: Partial<DocumentaryEntity>,
    selectConditions?: (keyof DocumentaryEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<DocumentaryEntity>, 'where' | 'select'>
    >,
  ): Promise<DocumentaryEntity[]> {
    return await this.repository.find({
      relations: ['awards'],
      ...otherConditions,
      select: { ...selectConditions },
      where: { ...whereConditions },
    });
  }
}
