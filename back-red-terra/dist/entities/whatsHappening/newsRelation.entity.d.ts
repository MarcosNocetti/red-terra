import { BaseEntity } from '../../config/base.entity';
import { NewsEntity } from './news.entity';
export declare class NewsRelationEntity extends BaseEntity {
    newsEnId?: string;
    newsEn?: NewsEntity;
    newsBrId?: string;
    newsBr?: NewsEntity;
}
