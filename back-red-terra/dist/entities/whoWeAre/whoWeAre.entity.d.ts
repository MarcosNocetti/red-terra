import { IWhoWeAreEntity } from 'src/modules/whoWeAre/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { HeaderEntity } from '../headers';
import { ClientReviewEntity, RdnEntity, TeamPeopleEntity } from './';
export declare class WhoWeAreEntity extends BaseEntity implements IWhoWeAreEntity {
    bannerUrl: string;
    title: string;
    text: string;
    quote: string;
    quoteAuthor: string;
    teamTitle: string;
    creditTitle: string;
    headerId: string;
    header?: HeaderEntity;
    teamPeople?: TeamPeopleEntity[];
    rdnTitle: string;
    rdnDescription: string;
    rdns?: RdnEntity[];
    clientReviewTitle: string;
    clientReviews?: ClientReviewEntity[];
}
