import { WhatsHappeningEntity } from 'src/entities';
import { BaseEntity } from '../../config/base.entity';
export declare class NewsEntity extends BaseEntity {
    imageUrl: string;
    title: string;
    monthYear: string;
    text: string;
    description?: string;
    backgroundColor: string;
    textColor: string;
    isRedCarta: boolean;
    linkUrl: string;
    whatsHappeningId: string;
    whatsHappening?: WhatsHappeningEntity;
}
