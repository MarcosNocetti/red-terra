import { CreditEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { CreditsRepository } from '../infra/repositories';
import { UpdateCreditsDto } from '../interfaceAdapters/dto';
import { ICredits } from '../interfaces';
export declare class CreditsService {
    private readonly creditsRepository;
    constructor(creditsRepository: CreditsRepository);
    create(data: ICredits): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<CreditEntity>, 'statusCode'>>>;
    delete(creditId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<CreditEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<CreditEntity[]>, 'statusCode'>>>;
    getByWhatWeDo(id: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<CreditEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateCreditsDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<CreditEntity>, 'statusCode'>>>;
}
