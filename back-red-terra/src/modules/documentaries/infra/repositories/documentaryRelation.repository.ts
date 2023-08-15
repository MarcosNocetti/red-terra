import { Injectable } from '@nestjs/common';
import { DocumentaryRelationEntity } from 'src/entities';
import {
  DataSource,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { IDocumentaryRelationRepository } from '../../interfaces';

@Injectable()
export class DocumentaryRelationRepository
  implements IDocumentaryRelationRepository
{
  private repository: Repository<DocumentaryRelationEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(DocumentaryRelationEntity);
  }

  async save(
    data: Partial<DocumentaryRelationEntity>,
  ): Promise<DocumentaryRelationEntity> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<DocumentaryRelationEntity> {
    return (await this.repository.delete({ id })).raw;
  }

  async findRegister(
    whereConditions: any,
    selectConditions?: (keyof DocumentaryRelationEntity)[],
    otherConditions?: Partial<
      Omit<FindOneOptions<DocumentaryRelationEntity>, 'where' | 'select'>
    >,
  ): Promise<DocumentaryRelationEntity> {
    return await this.repository.findOne({
      relations: [
        'documentaryEn',
        'documentaryBr',
        'documentaryEn.awards',
        'documentaryBr.awards',
      ],
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions,
    });
  }

  async findRelation(id: string): Promise<DocumentaryRelationEntity> {
    return await this.repository.findOne({
      relations: [
        'documentaryEn',
        'documentaryBr',
        'documentaryEn.awards',
        'documentaryBr.awards',
      ],
      where: [
        {
          documentaryEnId: id,
        },
        {
          documentaryBrId: id,
        },
      ],
    });
  }

  async findRegisters(
    whereConditions?: any,
    selectConditions?: (keyof DocumentaryRelationEntity)[],
    otherConditions?: Partial<
      Omit<FindManyOptions<DocumentaryRelationEntity>, 'where' | 'select'>
    >,
  ): Promise<DocumentaryRelationEntity[]> {
    return await this.repository.find({
      relations: [
        'documentaryEn',
        'documentaryBr',
        'documentaryEn.awards',
        'documentaryBr.awards',
      ],
      ...otherConditions,
      select: { ...selectConditions },
      where: whereConditions,
    });
  }
}
