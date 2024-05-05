import { RdnEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IRdnRepository } from '../../interfaces';
export declare class RdnRepository implements IRdnRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<RdnEntity>): Promise<RdnEntity>;
    delete(id: string): Promise<RdnEntity>;
    findRegister(whereConditions: Partial<RdnEntity>, selectConditions?: (keyof RdnEntity)[], otherConditions?: Partial<Omit<FindOneOptions<RdnEntity>, 'where' | 'select'>>): Promise<RdnEntity>;
    findRegisters(whereConditions?: Partial<RdnEntity>, selectConditions?: (keyof RdnEntity)[], otherConditions?: Partial<Omit<FindManyOptions<RdnEntity>, 'where' | 'select'>>): Promise<RdnEntity[]>;
}
