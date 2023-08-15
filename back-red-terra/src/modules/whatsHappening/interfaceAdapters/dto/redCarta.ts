import { IsIn, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IRedCartaEntity } from '../../interfaces';

export class RedCartaDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateRedCartaDto
  implements Omit<IRedCartaEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
