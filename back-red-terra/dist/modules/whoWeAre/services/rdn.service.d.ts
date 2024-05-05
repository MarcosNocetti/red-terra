import { RdnEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { RdnRepository } from '../infra/repositories';
import { UpdateRdnDto } from '../interfaceAdapters/dto';
import { IRdn } from '../interfaces';
export declare class RdnService {
    private readonly rdnRepository;
    constructor(rdnRepository: RdnRepository);
    create(data: IRdn): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RdnEntity>, 'statusCode'>>>;
    delete(rdnId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<RdnEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RdnEntity[]>, 'statusCode'>>>;
    getByWhatWeDo(id: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RdnEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateRdnDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RdnEntity>, 'statusCode'>>>;
}
