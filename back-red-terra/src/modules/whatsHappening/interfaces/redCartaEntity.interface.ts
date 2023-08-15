import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { LanguageType } from 'src/shared/types';
import { IRedCarta } from '.';

export interface IRedCartaEntity extends IRedCarta, IBaseEntity {
  language?: LanguageType;
}
