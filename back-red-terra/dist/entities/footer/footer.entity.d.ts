import { IFooterEntity } from 'src/modules/footer/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { FooterLinkEntity } from './';
export declare class FooterEntity extends BaseEntity implements IFooterEntity {
    copyright: string;
    links: FooterLinkEntity[];
}
