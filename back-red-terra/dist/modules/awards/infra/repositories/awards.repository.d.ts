import { AwardsEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IAwardsRepository } from '../../interfaces';
export declare class AwardsRepository implements IAwardsRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<AwardsEntity>): Promise<AwardsEntity>;
    delete(id: string): Promise<AwardsEntity>;
    findRegister(whereConditions: Partial<AwardsEntity>, selectConditions?: (keyof AwardsEntity)[], otherConditions?: Partial<Omit<FindOneOptions<AwardsEntity>, 'where' | 'select'>>): Promise<AwardsEntity>;
    findRegisters(whereConditions?: Partial<AwardsEntity>, selectConditions?: (keyof AwardsEntity)[], otherConditions?: Partial<Omit<FindManyOptions<AwardsEntity>, 'where' | 'select'>>): Promise<AwardsEntity[]>;
}
