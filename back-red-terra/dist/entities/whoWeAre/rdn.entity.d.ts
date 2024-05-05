import { IRdnEntity } from 'src/modules/whoWeAre/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';
export declare class RdnEntity extends BaseEntity implements IRdnEntity {
    personName: string;
    text: string;
    url?: string;
    whoWeAreId: string;
    whoWeAre?: WhoWeAreEntity;
}
