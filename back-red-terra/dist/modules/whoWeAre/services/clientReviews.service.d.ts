import { ClientReviewEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { ClientReviewsRepository } from '../infra/repositories';
import { UpdateClientReviewsDto } from '../interfaceAdapters/dto';
import { IClientReviews } from '../interfaces';
export declare class ClientReviewsService {
    private readonly clientReviewsRepository;
    constructor(clientReviewsRepository: ClientReviewsRepository);
    create(data: IClientReviews): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<ClientReviewEntity>, 'statusCode'>>>;
    delete(clientReviewId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<ClientReviewEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<ClientReviewEntity[]>, 'statusCode'>>>;
    getByWhatWeDo(id: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<ClientReviewEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateClientReviewsDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<ClientReviewEntity>, 'statusCode'>>>;
}
