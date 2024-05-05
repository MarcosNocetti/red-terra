import { UpdateFooterLinkDto } from './../interfaceAdapters/dto/footerLink';
import { FooterEntity, FooterLinkEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { FooterLinkRepository, FooterRepository } from '../infra/repositories';
import { UpdateFooterDto } from '../interfaceAdapters/dto';
import { IFooter, IFooterLink } from '../interfaces';
export declare class FooterService {
    private readonly footerRepository;
    private readonly footerLinkRepository;
    constructor(footerRepository: FooterRepository, footerLinkRepository: FooterLinkRepository);
    create(data: IFooter): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterEntity>, 'statusCode'>>>;
    createLink(data: IFooterLink): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterLinkEntity>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterEntity>, 'statusCode'>>>;
    getFooters(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterEntity[]>, 'statusCode'>>>;
    getLinks(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterLinkEntity[]>, 'statusCode'>>>;
    update(data: UpdateFooterDto): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterEntity>, 'statusCode'>>>;
    updateLink(data: UpdateFooterLinkDto): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<FooterLinkEntity>, 'statusCode'>>>;
}
