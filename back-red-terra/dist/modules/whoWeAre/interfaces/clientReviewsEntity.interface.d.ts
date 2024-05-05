import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IClientReviews, IWhoWeAre } from './';
import { LanguageType } from 'src/shared/types';
export interface IClientReviewsEntity extends IClientReviews, IBaseEntity {
    whoWeAre?: IWhoWeAre;
    language?: LanguageType;
}
