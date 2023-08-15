import { IsString } from 'class-validator';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { IFooterLinkEntity } from '../../interfaces';

export class FooterLinkDto {
  @IsString()
  link: string;

  @IsString()
  imageUrl: string;

  @IsString()
  label: string;
}

export class UpdateFooterLinkDto
  implements Omit<IFooterLinkEntity, BaseEntityOmitPropsType | 'footerId'>
{
  @IsString()
  id: string;

  @IsString()
  link: string;

  @IsString()
  imageUrl: string;

  @IsString()
  label: string;
}
