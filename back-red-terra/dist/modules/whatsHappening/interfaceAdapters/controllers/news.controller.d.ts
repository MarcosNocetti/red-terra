import { NewsEntity, NewsRelationEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { NewsService } from '../../services';
import { NewsDto, UpdateNewsDto } from '../dto';
import { NewsRelationRepository } from '../../infra/repositories/newsRelation.repository';
export declare class NewsController {
    private readonly newsService;
    private readonly newsRelationRepository;
    constructor(newsService: NewsService, newsRelationRepository: NewsRelationRepository);
    get(): Promise<IResponse<NewsEntity[]>>;
    getNewsByWhatsHappening(id: string): Promise<IResponse<NewsRelationEntity[]>>;
    createNews(data: NewsDto): Promise<IResponse<NewsEntity>>;
    updateNews(id: string, data: UpdateNewsDto): Promise<IResponse<NewsEntity>>;
    deleteNews(id: string): Promise<IResponse<NewsEntity>>;
}
