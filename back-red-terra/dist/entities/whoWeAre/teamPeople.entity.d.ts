import { ITeamPeopleEntity } from 'src/modules/whoWeAre/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';
export declare class TeamPeopleEntity extends BaseEntity implements ITeamPeopleEntity {
    name: string;
    position: string;
    resume: string;
    url: string;
    photoUrl: string;
    whoWeAreId: string;
    whoWeAre?: WhoWeAreEntity;
}
