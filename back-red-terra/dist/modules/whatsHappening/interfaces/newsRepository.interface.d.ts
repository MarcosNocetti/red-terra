import { NewsEntity } from 'src/entities';
import { IRepository } from 'src/shared/protocols';
export interface INewsRepository extends IRepository<NewsEntity> {
}
