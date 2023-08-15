import { IsIn, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IHeaderLinkEntity } from '../../interfaces';

export class HeaderLinkDto {
  @IsString()
  label: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  headerId: string;
}

export class UpdateHeaderLinkDto
  implements Omit<IHeaderLinkEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  label: string;

  @IsString()
  headerId: string;
}
