import { IsIn, IsString } from 'class-validator';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { ITeamPeopleEntity } from '../../interfaces';

export class TeamPeopleDto {
  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  resume: string;

  @IsString()
  url: string;

  @IsString()
  photoUrl: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}

export class UpdateTeamPeopleDto
  implements Omit<ITeamPeopleEntity, BaseEntityOmitPropsType>
{
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  position: string;

  @IsString()
  resume: string;

  @IsString()
  url: string;

  @IsString()
  photoUrl: string;

  @IsString()
  whoWeAreId: string;

  @IsString()
  @IsIn(['en', 'br'])
  language: LanguageType;
}
