import { ContactEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IContactRepository } from '../../interfaces';
export declare class ContactRepository implements IContactRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<ContactEntity>): Promise<ContactEntity>;
    findRegister(whereConditions: Partial<ContactEntity>, selectConditions?: (keyof ContactEntity)[], otherConditions?: Partial<Omit<FindOneOptions<ContactEntity>, 'where' | 'select'>>): Promise<ContactEntity>;
    findRegisters(whereConditions?: Partial<ContactEntity>, selectConditions?: (keyof ContactEntity)[], otherConditions?: Partial<Omit<FindManyOptions<ContactEntity>, 'where' | 'select'>>): Promise<ContactEntity[]>;
}
