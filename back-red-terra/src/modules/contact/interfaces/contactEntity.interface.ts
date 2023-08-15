import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { IContact } from './contact.interface';

export interface IContactEntity extends IContact, IBaseEntity {}
