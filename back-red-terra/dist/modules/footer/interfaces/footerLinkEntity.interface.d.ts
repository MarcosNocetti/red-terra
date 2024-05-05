import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IFooterEntity } from './footerEntity.interface';
import { IFooterLink } from './footerLink.interface';
export interface IFooterLinkEntity extends IFooterLink, IBaseEntity {
    footerId: string;
    footer?: IFooterEntity;
}
