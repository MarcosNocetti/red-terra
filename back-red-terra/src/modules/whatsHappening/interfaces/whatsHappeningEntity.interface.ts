import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { LanguageType } from 'src/shared/types';
import { IWhatsHappening } from '.';

export interface IWhatsHappeningEntity extends IWhatsHappening, IBaseEntity {
  language?: LanguageType;
}
