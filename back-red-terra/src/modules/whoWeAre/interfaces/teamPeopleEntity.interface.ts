import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { ITeamPeople, IWhoWeAre } from './';
import { LanguageType } from 'src/shared/types';

export interface ITeamPeopleEntity extends ITeamPeople, IBaseEntity {
  whoWeAre?: IWhoWeAre;
  language?: LanguageType;
}
