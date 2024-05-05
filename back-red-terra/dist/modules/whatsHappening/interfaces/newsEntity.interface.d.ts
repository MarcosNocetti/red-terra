import { IBaseEntity } from 'src/shared/interfaces/baseEntity.interface';
import { INews } from './news.interface';
import { LanguageType } from 'src/shared/types';
export interface INewsEntity extends INews, IBaseEntity {
    news?: INewsEntity;
    language?: LanguageType;
}
