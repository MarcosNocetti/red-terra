import { IBaseEntity } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { IRdn, IWhoWeAreEntity } from './';
export interface IRdnEntity extends IRdn, IBaseEntity {
    whoWeAre?: IWhoWeAreEntity;
    language?: LanguageType;
}
