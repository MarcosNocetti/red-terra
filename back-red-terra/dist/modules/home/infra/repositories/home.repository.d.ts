import { HomeEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IHomeRepository } from '../../interfaces';
export declare class HomeRepository implements IHomeRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<HomeEntity>): Promise<HomeEntity>;
    findRegister(whereConditions: Partial<HomeEntity>, selectConditions?: (keyof HomeEntity)[], otherConditions?: Partial<Omit<FindOneOptions<HomeEntity>, 'where' | 'select'>>): Promise<HomeEntity>;
    findRegisters(whereConditions?: Partial<HomeEntity>, selectConditions?: (keyof HomeEntity)[], otherConditions?: Partial<Omit<FindManyOptions<HomeEntity>, 'where' | 'select'>>): Promise<HomeEntity[]>;
}
