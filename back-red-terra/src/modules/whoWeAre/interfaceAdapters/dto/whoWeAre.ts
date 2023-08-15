import { IsIn, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class WhoWeAreDto {
  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  quote: string;

  @IsString()
  quoteAuthor: string;

  @IsString()
  teamTitle: string;

  @IsString()
  creditTitle: string;

  @IsString()
  headerId: string;

  @IsString()
  rdnTitle: string;

  @IsString()
  rdnDescription: string;

  @IsString()
  clientReviewTitle: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateWhoWeAreDto {
  @IsString()
  id: string;

  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  quote: string;

  @IsString()
  quoteAuthor: string;

  @IsString()
  teamTitle: string;

  @IsString()
  creditTitle: string;

  @IsString()
  headerId: string;

  @IsString()
  rdnTitle: string;

  @IsString()
  rdnDescription: string;

  @IsString()
  clientReviewTitle: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
