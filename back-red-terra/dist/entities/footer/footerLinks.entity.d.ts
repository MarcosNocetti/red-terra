import { IFooterLinkEntity } from 'src/modules/footer/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { FooterEntity } from './';
export declare class FooterLinkEntity extends BaseEntity implements IFooterLinkEntity {
    link: string;
    imageUrl: string;
    label: string;
    footerId: string;
    footer?: FooterEntity;
}
