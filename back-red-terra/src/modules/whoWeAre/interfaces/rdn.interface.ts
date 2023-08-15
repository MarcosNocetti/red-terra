import { LanguageType } from 'src/shared/types';

export interface IRdn {
  personName: string;
  text: string;
  url?: string;
  whoWeAreId: string;
  language?: LanguageType;
}
