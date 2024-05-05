import { CreditEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { ICreditsRepository } from '../../interfaces';
export declare class CreditsRepository implements ICreditsRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<CreditEntity>): Promise<CreditEntity>;
    delete(id: string): Promise<CreditEntity>;
    findRegister(whereConditions: Partial<CreditEntity>, selectConditions?: (keyof CreditEntity)[], otherConditions?: Partial<Omit<FindOneOptions<CreditEntity>, 'where' | 'select'>>): Promise<CreditEntity>;
    findRegisters(whereConditions?: Partial<CreditEntity>, selectConditions?: (keyof CreditEntity)[], otherConditions?: Partial<Omit<FindManyOptions<CreditEntity>, 'where' | 'select'>>): Promise<CreditEntity[]>;
}
