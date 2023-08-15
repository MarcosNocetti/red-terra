import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IWhatWeDoEntity } from './whatWeDoEntity.interface';
import { ICredits } from './credits.interface';
import { LanguageType } from 'src/shared/types';

export interface ICreditsEntity extends ICredits, IBaseEntity {
  whatWeDo?: IWhatWeDoEntity;
  language?: LanguageType;
}
