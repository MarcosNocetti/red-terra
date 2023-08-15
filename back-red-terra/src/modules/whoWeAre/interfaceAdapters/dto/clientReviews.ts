import { IsIn, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IClientReviewsEntity } from '../../interfaces';

export class ClientReviewsDto {
  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  personName: string;

  @IsString()
  review: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateClientReviewsDto
  implements Omit<IClientReviewsEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  personName: string;

  @IsString()
  review: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
