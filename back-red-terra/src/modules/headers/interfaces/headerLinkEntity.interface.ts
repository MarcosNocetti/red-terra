import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IHeaderEntity } from './headerEntity.interface';
import { IHeaderLink } from './headerLink.interface';

export interface IHeaderLinkEntity extends IHeaderLink, IBaseEntity {}
