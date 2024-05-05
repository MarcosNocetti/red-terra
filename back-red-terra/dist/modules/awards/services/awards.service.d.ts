import { AwardsEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { AwardsRepository } from '../infra/repositories';
import { IAwards } from '../interfaces';
export declare class AwardsService {
    private readonly awardsRepository;
    constructor(awardsRepository: AwardsRepository);
    create(data: IAwards): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>>>;
    delete(awardId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity, 'language'>>, 'statusCode'>>>;
    getByWhoWeAre(whoWeAreId: string, language?: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>>>;
    getByDocumentary(documentaryId: string, language?: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<AwardsEntity[], 'language'>>, 'statusCode'>>>;
    update(data: Partial<Omit<AwardsEntity, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<AwardsEntity>, 'statusCode'>>>;
}
