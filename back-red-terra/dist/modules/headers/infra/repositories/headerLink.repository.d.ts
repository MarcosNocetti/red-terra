import { HeaderLinkEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IHeaderLinkRepository } from '../../interfaces';
export declare class HeaderLinkRepository implements IHeaderLinkRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<HeaderLinkEntity>): Promise<HeaderLinkEntity>;
    findRegister(whereConditions: Partial<HeaderLinkEntity>, selectConditions?: (keyof HeaderLinkEntity)[], otherConditions?: Partial<Omit<FindOneOptions<HeaderLinkEntity>, 'where' | 'select'>>): Promise<HeaderLinkEntity>;
    findRegisters(whereConditions?: Partial<HeaderLinkEntity>, selectConditions?: (keyof HeaderLinkEntity)[], otherConditions?: Partial<Omit<FindManyOptions<HeaderLinkEntity>, 'where' | 'select'>>): Promise<HeaderLinkEntity[]>;
}
