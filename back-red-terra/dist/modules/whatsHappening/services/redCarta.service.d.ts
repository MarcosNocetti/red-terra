import { RedCartaEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { RedCartaRepository } from '../infra/repositories';
import { UpdateRedCartaDto } from '../interfaceAdapters/dto';
import { IRedCarta } from '../interfaces';
export declare class RedCartaService {
    private readonly redCartaRepository;
    constructor(redCartaRepository: RedCartaRepository);
    create(data: IRedCarta): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RedCartaEntity>, 'statusCode'>>>;
    delete(redCartaId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<RedCartaEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RedCartaEntity[]>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateRedCartaDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<RedCartaEntity>, 'statusCode'>>>;
}
