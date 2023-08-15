import { IsIn, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class WhatsHappeningDto {
  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateWhatsHappeningDto {
  @IsString()
  id: string;

  @IsString()
  bannerUrl: string;

  @IsString()
  title: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
