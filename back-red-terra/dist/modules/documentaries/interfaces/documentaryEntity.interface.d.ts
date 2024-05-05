import { IAwardsEntity } from 'src/modules/awards/interfaces';
import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IDocumentary } from './documentary.interface';
export interface IDocumentaryEntity extends IDocumentary, IBaseEntity {
    awards: IAwardsEntity;
}
