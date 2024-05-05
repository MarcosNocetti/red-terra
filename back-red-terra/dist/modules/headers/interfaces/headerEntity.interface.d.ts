import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IHeader } from './header.interface';
import { IHeaderLinkEntity } from './headerLinkEntity.interface';
export interface IHeaderEntity extends IHeader, IBaseEntity {
    links?: Partial<IHeaderLinkEntity>[];
}
