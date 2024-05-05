import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { ITeamPeopleEntity } from '../../interfaces';
export declare class TeamPeopleDto {
    name: string;
    position: string;
    resume: string;
    url: string;
    photoUrl: string;
    whoWeAreId: string;
    language: LanguageType;
}
export declare class UpdateTeamPeopleDto implements Omit<ITeamPeopleEntity, BaseEntityOmitPropsType> {
    id: string;
    name: string;
    position: string;
    resume: string;
    url: string;
    photoUrl: string;
    whoWeAreId: string;
    language: LanguageType;
}
