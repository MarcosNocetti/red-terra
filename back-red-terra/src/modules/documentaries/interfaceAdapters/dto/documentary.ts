import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class DocumentaryDto {
  @IsString()
  name: string;

  @IsString()
  videoUrl: string;

  @IsString()
  sinopse: string;

  @IsString()
  sinopseUrl: string;

  @IsString()
  sinopseUrlLabel: string;

  @IsString()
  imageUrl: string;

  @IsString()
  availability: string;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  relationId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  whatWeDoId: string;
}

export class UpdateDocumentaryDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  videoUrl: string;

  @IsString()
  sinopse: string;

  @IsString()
  sinopseUrl: string;

  @IsString()
  imageUrl: string;

  @IsString()
  sinopseUrlLabel: string;

  @IsString()
  availability: string;

  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  relationId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  whatWeDoId: string;
}
