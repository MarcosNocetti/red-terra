import { DocumentaryRelationEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IDocumentaryRelationRepository } from '../../interfaces';
export declare class DocumentaryRelationRepository implements IDocumentaryRelationRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<DocumentaryRelationEntity>): Promise<DocumentaryRelationEntity>;
    delete(id: string): Promise<DocumentaryRelationEntity>;
    findRegister(whereConditions: any, selectConditions?: (keyof DocumentaryRelationEntity)[], otherConditions?: Partial<Omit<FindOneOptions<DocumentaryRelationEntity>, 'where' | 'select'>>): Promise<DocumentaryRelationEntity>;
    findRelation(id: string): Promise<DocumentaryRelationEntity>;
    findRegisters(whereConditions?: any, selectConditions?: (keyof DocumentaryRelationEntity)[], otherConditions?: Partial<Omit<FindManyOptions<DocumentaryRelationEntity>, 'where' | 'select'>>): Promise<DocumentaryRelationEntity[]>;
}
