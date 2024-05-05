import { ContactEntity } from 'src/entities';
import { IRepository } from 'src/shared/protocols';
export interface IContactRepository extends IRepository<ContactEntity> {
}
