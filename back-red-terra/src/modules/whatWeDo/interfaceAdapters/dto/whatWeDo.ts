import { IsIn, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class WhatWeDoDto {
  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  creditTitle: string;

  @IsString()
  headerId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateWhatWeDoDto {
  @IsString()
  id: string;

  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  creditTitle: string;

  @IsString()
  headerId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
