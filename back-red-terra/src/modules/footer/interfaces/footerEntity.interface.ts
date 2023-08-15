import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IFooter } from './footer.interface';
import { IFooterLinkEntity } from './footerLinkEntity.interface';

export interface IFooterEntity extends IFooter, IBaseEntity {
  links: Partial<IFooterLinkEntity>[];
}
