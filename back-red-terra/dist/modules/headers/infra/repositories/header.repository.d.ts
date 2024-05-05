import { HeaderEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IHeaderRepository } from '../../interfaces';
export declare class HeaderRepository implements IHeaderRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<Omit<HeaderEntity, 'links'>>): Promise<HeaderEntity>;
    findRegister(whereConditions: Partial<HeaderEntity>, selectConditions?: (keyof HeaderEntity)[], otherConditions?: Partial<Omit<FindOneOptions<HeaderEntity>, 'where' | 'select'>>): Promise<HeaderEntity>;
    findRegisters(whereConditions?: Partial<HeaderEntity>, selectConditions?: (keyof HeaderEntity)[], otherConditions?: Partial<Omit<FindManyOptions<HeaderEntity>, 'where' | 'select'>>): Promise<HeaderEntity[]>;
}
