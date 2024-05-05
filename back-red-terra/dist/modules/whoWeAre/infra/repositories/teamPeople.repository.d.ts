import { TeamPeopleEntity } from 'src/entities';
import { DataSource, FindManyOptions, FindOneOptions } from 'typeorm';
import { ITeamPeopleRepository } from '../../interfaces';
export declare class TeamPeopleRepository implements ITeamPeopleRepository {
    private readonly dataSource;
    private repository;
    constructor(dataSource: DataSource);
    save(data: Partial<TeamPeopleEntity>): Promise<TeamPeopleEntity>;
    delete(id: string): Promise<TeamPeopleEntity>;
    findRegister(whereConditions: Partial<TeamPeopleEntity>, selectConditions?: (keyof TeamPeopleEntity)[], otherConditions?: Partial<Omit<FindOneOptions<TeamPeopleEntity>, 'where' | 'select'>>): Promise<TeamPeopleEntity>;
    findRegisters(whereConditions?: Partial<TeamPeopleEntity>, selectConditions?: (keyof TeamPeopleEntity)[], otherConditions?: Partial<Omit<FindManyOptions<TeamPeopleEntity>, 'where' | 'select'>>): Promise<TeamPeopleEntity[]>;
}
