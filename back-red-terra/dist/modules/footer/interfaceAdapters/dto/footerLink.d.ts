import { BaseEntityOmitPropsType } from 'src/shared/types';
import { IFooterLinkEntity } from '../../interfaces';
export declare class FooterLinkDto {
    link: string;
    imageUrl: string;
    label: string;
}
export declare class UpdateFooterLinkDto implements Omit<IFooterLinkEntity, BaseEntityOmitPropsType | 'footerId'> {
    id: string;
    link: string;
    imageUrl: string;
    label: string;
}
