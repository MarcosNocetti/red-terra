import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { INewsEntity } from '../../interfaces';

export class NewsDto {
  @IsString()
  imageUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  backgroundColor?: string;

  @IsString()
  @IsOptional()
  monthYear?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  textColor?: string;

  @IsString()
  linkUrl: string;

  @IsString()
  @IsOptional()
  newsId?: string;

  @IsString()
  @IsOptional()
  whatsHappeningId?: string;

  @IsString()
  @IsOptional()
  relationId?: string;

  @IsBoolean()
  @IsOptional()
  isRedCarta?: boolean;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateNewsDto
  implements Omit<INewsEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  imageUrl: string;

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  whatsHappeningId?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  backgroundColor?: string;

  @IsString()
  @IsOptional()
  textColor?: string;

  @IsString()
  linkUrl: string;

  @IsString()
  @IsOptional()
  newsId?: string;

  @IsBoolean()
  @IsOptional()
  isRedCarta?: boolean;

  @IsString()
  @IsOptional()
  relationId?: string;

  @IsString()
  @IsOptional()
  monthYear?: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
