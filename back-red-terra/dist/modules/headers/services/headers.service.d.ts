import { HeaderEntity, HeaderLinkEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { HeaderLinkRepository, HeaderRepository } from '../infra/repositories';
import { UpdateHeaderDto } from '../interfaceAdapters/dto';
import { IHeader, IHeaderLink } from '../interfaces';
export declare class HeadersService {
    private readonly headerRepository;
    private readonly headerLinkRepository;
    constructor(headerRepository: HeaderRepository, headerLinkRepository: HeaderLinkRepository);
    create(data: IHeader): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HeaderEntity>, 'statusCode'>>>;
    createLink(data: IHeaderLink): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HeaderLinkEntity>, 'statusCode'>>>;
    getByLang(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HeaderEntity>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HeaderEntity[]>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateHeaderDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HeaderEntity>, 'statusCode'>>>;
}
