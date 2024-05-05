import { NewsEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { NewsRepository } from '../infra/repositories';
import { UpdateNewsDto } from '../interfaceAdapters/dto';
import { INews } from '../interfaces';
import { NewsRelationRepository } from '../infra/repositories/newsRelation.repository';
export declare class NewsService {
    private readonly newsRepository;
    private readonly newsRelationRepository;
    constructor(newsRepository: NewsRepository, newsRelationRepository: NewsRelationRepository);
    create(data: INews): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<NewsEntity>, 'statusCode'>>>;
    delete(newsId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<NewsEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<NewsEntity[]>, 'statusCode'>>>;
    getByWhatsHappening(whatsHappeningId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<NewsEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateNewsDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<NewsEntity>, 'statusCode'>>>;
}
