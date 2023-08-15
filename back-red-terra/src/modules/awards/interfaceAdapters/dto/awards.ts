import { IsIn, IsOptional, IsString } from 'class-validator';
import { LanguageType } from 'src/shared/types';

export class AwardsDto {
  @IsString()
  name: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  documentaryId?: string;

  @IsString()
  @IsOptional()
  whoWeAreId?: string;
}

export class UpdateAwardsDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
