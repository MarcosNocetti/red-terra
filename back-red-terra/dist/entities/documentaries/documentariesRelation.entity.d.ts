import { BaseEntity } from '../../config/base.entity';
import { DocumentaryEntity } from './documentaries.entity';
export declare class DocumentaryRelationEntity extends BaseEntity {
    documentaryEnId?: string;
    documentaryEn?: DocumentaryEntity;
    documentaryBrId?: string;
    documentaryBr?: DocumentaryEntity;
}
