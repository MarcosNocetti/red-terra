import { IsIn, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class FooterDto {
  @IsString()
  copyright: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateFooterDto {
  @IsString()
  id: string;

  @IsString()
  copyright: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
