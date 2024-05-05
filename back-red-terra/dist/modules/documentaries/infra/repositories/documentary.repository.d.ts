import { DocumentaryEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IDocumentaryRepository } from '../../interfaces';
export declare class DocumentaryRepository implements IDocumentaryRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<DocumentaryEntity>): Promise<DocumentaryEntity>;
    delete(id: string): Promise<DocumentaryEntity>;
    findRegister(whereConditions: Partial<DocumentaryEntity>, selectConditions?: (keyof DocumentaryEntity)[], otherConditions?: Partial<Omit<FindOneOptions<DocumentaryEntity>, 'where' | 'select'>>): Promise<DocumentaryEntity>;
    findRegisters(whereConditions?: Partial<DocumentaryEntity>, selectConditions?: (keyof DocumentaryEntity)[], otherConditions?: Partial<Omit<FindManyOptions<DocumentaryEntity>, 'where' | 'select'>>): Promise<DocumentaryEntity[]>;
}
