import { IHeaderEntity } from 'src/modules/headers/interfaces';
import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { LanguageType } from 'src/shared/types';
import {
  IWhoWeAre,
  IRdnEntity,
  IClientReviewsEntity,
  ITeamPeopleEntity,
} from '.';

export interface IWhoWeAreEntity extends IWhoWeAre, IBaseEntity {
  rdns?: IRdnEntity[];
  teamPeople?: ITeamPeopleEntity[];
  clientReviews?: IClientReviewsEntity[];
  header?: IHeaderEntity;
  language?: LanguageType;
}
