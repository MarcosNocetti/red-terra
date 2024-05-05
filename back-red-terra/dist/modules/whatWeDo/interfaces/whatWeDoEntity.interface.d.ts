import { IHeaderEntity } from 'src/modules/headers/interfaces';
import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { LanguageType } from 'src/shared/types';
import { IWhatWeDo, ICreditsEntity } from './';
export interface IWhatWeDoEntity extends IWhatWeDo, IBaseEntity {
    credits?: ICreditsEntity[];
    header?: IHeaderEntity;
    language?: LanguageType;
}
