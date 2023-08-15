import { LanguageType } from 'src/shared/types';

export interface ICredits {
  subtitle: string;
  text: string;
  whatWeDoId: string;
  language?: LanguageType;
}
