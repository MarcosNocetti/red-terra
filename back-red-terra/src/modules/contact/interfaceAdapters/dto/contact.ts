import { IsIn, IsOptional, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class ContactDto {
  @IsString()
  bannerUrl: string;

  @IsString()
  telephone: string;

  @IsString()
  email: string;

  @IsString()
  description: string;

  @IsString()
  quote: string;

  @IsString()
  quoteAuthor: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateContactDto {
  @IsString()
  id: string;

  @IsString()
  bannerUrl: string;

  @IsString()
  telephone: string;

  @IsString()
  email: string;

  @IsString()
  description: string;

  @IsString()
  quote: string;

  @IsString()
  quoteAuthor: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
