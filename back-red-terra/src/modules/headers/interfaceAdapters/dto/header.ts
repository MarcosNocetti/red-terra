import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageType } from 'src/shared/types';
import { HeaderLinkDto, UpdateHeaderLinkDto } from './headerLink';

export class HeaderDto {
  @IsString()
  imageUrl: string;

  @IsString()
  textColor: string;

  @IsString()
  backgroundColor: string;
}

export class UpdateHeaderDto {
  @IsString()
  id: string;

  @IsString()
  imageUrl: string;

  @IsString()
  textColor: string;

  @IsString()
  backgroundColor: string;
}
