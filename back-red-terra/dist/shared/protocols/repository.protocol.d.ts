import { FindManyOptions, FindOneOptions } from 'typeorm';
export interface IRepository<T = any> {
    save(data: Partial<T>): Promise<T>;
    delete?: IDelete<T>;
    findRegister(whereConditions: Partial<T>, selectConditions?: (keyof T)[], otherConditions?: Partial<Omit<FindOneOptions<T>, 'where' | 'select'>>): Promise<T>;
    findRegisters(whereConditions?: Partial<T>, selectConditions?: (keyof T)[], otherConditions?: Partial<Omit<FindManyOptions<T>, 'where' | 'select'>>): Promise<T[]>;
}
interface IDelete<T = any> {
    (id: string): Promise<T>;
}
export {};
