import { LanguageType } from '../types';

export interface IBaseEntity {
  id: string;
  language?: LanguageType;
  createdAt: Date;
  updatedAt: Date;
}
