import { IsIn, IsOptional, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IRdnEntity } from '../../interfaces';

export class RdnDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  personName: string;

  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateRdnDto implements Omit<IRdnEntity, BaseEntityOmitPropsType> {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  personName: string;

  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
