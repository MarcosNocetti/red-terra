import { WhatWeDoEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { IWhatWeDoRepository } from '../../interfaces';
export declare class WhatWeDoRepository implements IWhatWeDoRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<WhatWeDoEntity>): Promise<WhatWeDoEntity>;
    findRegister(whereConditions: Partial<WhatWeDoEntity>, selectConditions?: (keyof WhatWeDoEntity)[], otherConditions?: Partial<Omit<FindOneOptions<WhatWeDoEntity>, 'where' | 'select'>>): Promise<WhatWeDoEntity>;
    findRegisters(whereConditions?: Partial<WhatWeDoEntity>, selectConditions?: (keyof WhatWeDoEntity)[], otherConditions?: Partial<Omit<FindManyOptions<WhatWeDoEntity>, 'where' | 'select'>>): Promise<WhatWeDoEntity[]>;
}
