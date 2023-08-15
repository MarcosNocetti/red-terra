import { LanguageType } from 'src/shared/types';

export interface IWhatWeDo {
  bannerUrl: string;
  title: string;
  text: string;
  creditTitle: string;
  language?: LanguageType;
}
