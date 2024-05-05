import { WhoWeAreEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhoWeAreRepository } from '../infra/repositories';
import { UpdateWhoWeAreDto } from '../interfaceAdapters/dto';
import { IWhoWeAre } from '../interfaces';
export declare class WhoWeAreService {
    private readonly whatWeDoRepository;
    constructor(whatWeDoRepository: WhoWeAreRepository);
    create(data: IWhoWeAre): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhoWeAreEntity>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhoWeAreEntity[]>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhoWeAreEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateWhoWeAreDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhoWeAreEntity>, 'statusCode'>>>;
}
