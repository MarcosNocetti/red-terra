import { CreditEntity } from 'src/entities';
import { IRepository } from 'src/shared/protocols';
export interface ICreditsRepository extends IRepository<CreditEntity> {
}
