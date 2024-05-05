import { FooterEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IFooterRepository } from '../../interfaces';
export declare class FooterRepository implements IFooterRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<FooterEntity>): Promise<FooterEntity>;
    findRegister(whereConditions: Partial<FooterEntity>, selectConditions?: (keyof FooterEntity)[], otherConditions?: Partial<Omit<FindOneOptions<FooterEntity>, 'where' | 'select'>>): Promise<FooterEntity>;
    findRegisters(whereConditions?: Partial<FooterEntity>, selectConditions?: (keyof FooterEntity)[], otherConditions?: Partial<Omit<FindManyOptions<FooterEntity>, 'where' | 'select'>>): Promise<FooterEntity[]>;
}
