import { NewsEntity } from 'src/entities';
import { BaseEntity } from '../../config/base.entity';
export declare class WhatsHappeningEntity extends BaseEntity {
    bannerUrl: string;
    title: string;
    subtitle: string;
    news: NewsEntity[];
}
