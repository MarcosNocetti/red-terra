import { BaseEntity } from '../../config/base.entity';
import { DocumentaryEntity } from '../documentaries';
import { WhoWeAreEntity } from '../whoWeAre';
export declare class AwardsEntity extends BaseEntity {
    name: string;
    imageUrl?: string;
    documentaryId?: string;
    documentary?: DocumentaryEntity;
    whoWeAreId?: string;
    whoWeAre?: WhoWeAreEntity;
}
