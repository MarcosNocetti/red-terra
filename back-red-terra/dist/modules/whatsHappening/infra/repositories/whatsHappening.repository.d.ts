import { WhatsHappeningEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IWhatsHappeningRepository } from '../../interfaces';
export declare class WhatsHappeningRepository implements IWhatsHappeningRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<WhatsHappeningEntity>): Promise<WhatsHappeningEntity>;
    findRegister(whereConditions: Partial<WhatsHappeningEntity>, selectConditions?: (keyof WhatsHappeningEntity)[], otherConditions?: Partial<Omit<FindOneOptions<WhatsHappeningEntity>, 'where' | 'select'>>): Promise<WhatsHappeningEntity>;
    findRegisters(whereConditions?: Partial<WhatsHappeningEntity>, selectConditions?: (keyof WhatsHappeningEntity)[], otherConditions?: Partial<Omit<FindManyOptions<WhatsHappeningEntity>, 'where' | 'select'>>): Promise<WhatsHappeningEntity[]>;
}
