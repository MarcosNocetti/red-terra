import { BaseEntity } from '../../config/base.entity';
import { AwardsEntity } from '../awards';
import { WhatWeDoEntity } from '../whatWeDo';
export declare class DocumentaryEntity extends BaseEntity {
    name: string;
    videoUrl: string;
    imageUrl: string;
    sinopse: string;
    sinopseUrl: string;
    sinopseUrlLabel: string;
    availability: string;
    active: boolean;
    whatWeDoId: string;
    whatWeDo?: WhatWeDoEntity;
    awards?: AwardsEntity[];
}
