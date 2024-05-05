import { TeamPeopleEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { TeamPeopleService } from '../../services';
import { TeamPeopleDto, UpdateTeamPeopleDto } from '../dto';
export declare class TeamPeopleController {
    private readonly teamPeopleService;
    constructor(teamPeopleService: TeamPeopleService);
    get(): Promise<IResponse<TeamPeopleEntity[]>>;
    getTeamPeopleByWhatWeDo(id: string): Promise<IResponse<TeamPeopleEntity>>;
    createTeamPeople(data: TeamPeopleDto): Promise<IResponse<TeamPeopleEntity>>;
    updateTeamPeople(id: string, data: UpdateTeamPeopleDto): Promise<IResponse<TeamPeopleEntity>>;
    deleteTeamPeople(id: string): Promise<IResponse<TeamPeopleEntity>>;
}
