import { FooterLinkEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IFooterLinkRepository } from '../../interfaces';
export declare class FooterLinkRepository implements IFooterLinkRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<FooterLinkEntity>): Promise<FooterLinkEntity>;
    findRegister(whereConditions: Partial<FooterLinkEntity>, selectConditions?: (keyof FooterLinkEntity)[], otherConditions?: Partial<Omit<FindOneOptions<FooterLinkEntity>, 'where' | 'select'>>): Promise<FooterLinkEntity>;
    findRegisters(whereConditions?: Partial<FooterLinkEntity>, selectConditions?: (keyof FooterLinkEntity)[], otherConditions?: Partial<Omit<FindManyOptions<FooterLinkEntity>, 'where' | 'select'>>): Promise<FooterLinkEntity[]>;
}
