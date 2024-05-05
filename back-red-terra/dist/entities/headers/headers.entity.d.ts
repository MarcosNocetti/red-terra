import { BaseEntity } from '../../config/base.entity';
import { IHeaderEntity } from '../../modules/headers/interfaces';
import { HeaderLinkEntity } from './';
export declare class HeaderEntity extends BaseEntity implements IHeaderEntity {
    imageUrl: string;
    textColor: string;
    backgroundColor: string;
    links?: HeaderLinkEntity[];
}
