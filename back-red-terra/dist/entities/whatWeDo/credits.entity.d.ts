import { ICreditsEntity } from 'src/modules/whatWeDo/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { WhatWeDoEntity } from './';
export declare class CreditEntity extends BaseEntity implements ICreditsEntity {
    subtitle: string;
    text: string;
    whatWeDoId: string;
    whatWeDo?: WhatWeDoEntity;
}
