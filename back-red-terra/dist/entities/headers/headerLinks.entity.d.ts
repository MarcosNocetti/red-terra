import { BaseEntity } from '../../config/base.entity';
import { IHeaderLinkEntity } from '../../modules/headers/interfaces';
import { HeaderEntity } from './';
export declare class HeaderLinkEntity extends BaseEntity implements IHeaderLinkEntity {
    label: string;
    headerId: string;
    header?: HeaderEntity;
}
