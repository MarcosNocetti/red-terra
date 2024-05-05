import { ClientReviewEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IClientReviewsRepository } from '../../interfaces';
export declare class ClientReviewsRepository implements IClientReviewsRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<ClientReviewEntity>): Promise<ClientReviewEntity>;
    delete(id: string): Promise<ClientReviewEntity>;
    findRegister(whereConditions: Partial<ClientReviewEntity>, selectConditions?: (keyof ClientReviewEntity)[], otherConditions?: Partial<Omit<FindOneOptions<ClientReviewEntity>, 'where' | 'select'>>): Promise<ClientReviewEntity>;
    findRegisters(whereConditions?: Partial<ClientReviewEntity>, selectConditions?: (keyof ClientReviewEntity)[], otherConditions?: Partial<Omit<FindManyOptions<ClientReviewEntity>, 'where' | 'select'>>): Promise<ClientReviewEntity[]>;
}
