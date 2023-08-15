import { IsIn, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { ICreditsEntity } from '../../interfaces';

export class CreditsDto {
  @IsString()
  subtitle: string;

  @IsString()
  text: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  whatWeDoId: string;
}

export class UpdateCreditsDto
  implements Omit<ICreditsEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  subtitle: string;

  @IsString()
  text: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;

  @IsString()
  whatWeDoId: string;
}
