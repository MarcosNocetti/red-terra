import { RedCartaEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IRedCartaRepository } from '../../interfaces';
export declare class RedCartaRepository implements IRedCartaRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<RedCartaEntity>): Promise<RedCartaEntity>;
    delete(id: string): Promise<RedCartaEntity>;
    findRegister(whereConditions: Partial<RedCartaEntity>, selectConditions?: (keyof RedCartaEntity)[], otherConditions?: Partial<Omit<FindOneOptions<RedCartaEntity>, 'where' | 'select'>>): Promise<RedCartaEntity>;
    findRegisters(whereConditions?: Partial<RedCartaEntity>, selectConditions?: (keyof RedCartaEntity)[], otherConditions?: Partial<Omit<FindManyOptions<RedCartaEntity>, 'where' | 'select'>>): Promise<RedCartaEntity[]>;
}
