import { LanguageType } from 'src/shared/types';
import { IFooterLink } from './footerLink.interface';

export interface IFooter {
  copyright: string;
  language?: LanguageType;
}
