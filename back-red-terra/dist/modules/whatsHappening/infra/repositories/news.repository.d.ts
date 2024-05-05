import { NewsEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { INewsRepository } from '../../interfaces';
export declare class NewsRepository implements INewsRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<NewsEntity>): Promise<NewsEntity>;
    delete(id: string): Promise<NewsEntity>;
    findRegister(whereConditions: Partial<NewsEntity>, selectConditions?: (keyof NewsEntity)[], otherConditions?: Partial<Omit<FindOneOptions<NewsEntity>, 'where' | 'select'>>): Promise<NewsEntity>;
    findRegisters(whereConditions?: Partial<NewsEntity>, selectConditions?: (keyof NewsEntity)[], otherConditions?: Partial<Omit<FindManyOptions<NewsEntity>, 'where' | 'select'>>): Promise<NewsEntity[]>;
}
