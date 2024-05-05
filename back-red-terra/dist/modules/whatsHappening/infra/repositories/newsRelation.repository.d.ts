import { NewsRelationEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { INewsRelationRepository } from '../../interfaces';
export declare class NewsRelationRepository implements INewsRelationRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<NewsRelationEntity>): Promise<NewsRelationEntity>;
    delete(id: string): Promise<NewsRelationEntity>;
    findRegister(whereConditions: any, selectConditions?: (keyof NewsRelationEntity)[], otherConditions?: Partial<Omit<FindOneOptions<NewsRelationEntity>, 'where' | 'select'>>): Promise<NewsRelationEntity>;
    findRelation(id: string): Promise<NewsRelationEntity>;
    findRegisters(whereConditions?: any, selectConditions?: (keyof NewsRelationEntity)[], otherConditions?: Partial<Omit<FindManyOptions<NewsRelationEntity>, 'where' | 'select'>>): Promise<NewsRelationEntity[]>;
}
