import { TeamPeopleEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { TeamPeopleRepository } from '../infra/repositories';
import { UpdateTeamPeopleDto } from '../interfaceAdapters/dto';
import { ITeamPeople } from '../interfaces';
export declare class TeamPeopleService {
    private readonly teamPeopleRepository;
    constructor(teamPeopleRepository: TeamPeopleRepository);
    create(data: ITeamPeople): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<TeamPeopleEntity>, 'statusCode'>>>;
    delete(teamPeopleId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<TeamPeopleEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<TeamPeopleEntity[]>, 'statusCode'>>>;
    getByWhatWeDo(id: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<TeamPeopleEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateTeamPeopleDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<TeamPeopleEntity>, 'statusCode'>>>;
}
