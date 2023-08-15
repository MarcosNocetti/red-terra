import { LanguageType } from 'src/shared/types';

export interface INews {
  imageUrl: string;
  title: string;
  text: string;
  monthYear?: string;
  backgroundColor?: string;
  textColor?: string;
  newsId?: string;
  language?: LanguageType;
  isRedCarta?: boolean;
  linkUrl: string;
  relationId?: string;
}
