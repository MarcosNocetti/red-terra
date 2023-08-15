import { NewsRelationEntity } from 'src/entities';
import { IRepository } from 'src/shared/protocols';

export interface INewsRelationRepository
  extends IRepository<NewsRelationEntity> {}
