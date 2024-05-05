import { IWhatWeDoEntity } from 'src/modules/whatWeDo/interfaces';
import { BaseEntity } from '../../config/base.entity';
import { CreditEntity } from './';
import { DocumentaryEntity } from '../documentaries';
export declare class WhatWeDoEntity extends BaseEntity implements IWhatWeDoEntity {
    bannerUrl: string;
    title: string;
    text: string;
    credits?: CreditEntity[];
    documentaries?: DocumentaryEntity[];
    creditTitle: string;
}
