import { LanguageType } from 'src/shared/types';

export interface IWhoWeAre {
  bannerUrl: string;
  title: string;
  text: string;
  quote: string;
  quoteAuthor: string;
  teamTitle: string;
  creditTitle: string;
  headerId: string;
  rdnTitle: string;
  rdnDescription: string;
  clientReviewTitle: string;
  language?: LanguageType;
}
