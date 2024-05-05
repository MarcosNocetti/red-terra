import { IContactEntity } from 'src/modules/contact/interfaces';
import { BaseEntity } from '../../config/base.entity';
export declare class ContactEntity extends BaseEntity implements IContactEntity {
    bannerUrl: string;
    telephone: string;
    email: string;
    description: string;
    quote: string;
    quoteAuthor: string;
}
