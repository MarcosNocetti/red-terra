import { LanguageType } from 'src/shared/types';
import { IHeaderLink } from './headerLink.interface';

export interface IHeader {
  imageUrl: string;
  textColor: string;
  backgroundColor: string;
  language?: LanguageType;
  links?: Partial<IHeaderLink>[];
}
