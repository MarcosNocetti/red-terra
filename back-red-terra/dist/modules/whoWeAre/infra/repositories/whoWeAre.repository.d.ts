import { WhoWeAreEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IWhoWeAreRepository } from '../../interfaces';
export declare class WhoWeAreRepository implements IWhoWeAreRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<WhoWeAreEntity>): Promise<WhoWeAreEntity>;
    findRegister(whereConditions: Partial<WhoWeAreEntity>, selectConditions?: (keyof WhoWeAreEntity)[], otherConditions?: Partial<Omit<FindOneOptions<WhoWeAreEntity>, 'where' | 'select'>>): Promise<WhoWeAreEntity>;
    findRegisters(whereConditions?: Partial<WhoWeAreEntity>, selectConditions?: (keyof WhoWeAreEntity)[], otherConditions?: Partial<Omit<FindManyOptions<WhoWeAreEntity>, 'where' | 'select'>>): Promise<WhoWeAreEntity[]>;
}
