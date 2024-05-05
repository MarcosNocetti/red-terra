import { IClientReviewsEntity } from 'src/modules/whoWeAre/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';
export declare class ClientReviewEntity extends BaseEntity implements IClientReviewsEntity {
    name: string;
    position: string;
    personName: string;
    review: string;
    whoWeAreId: string;
    whoWeAre?: WhoWeAreEntity;
}
