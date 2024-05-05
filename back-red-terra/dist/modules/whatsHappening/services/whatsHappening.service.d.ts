import { WhatsHappeningEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhatsHappeningRepository } from '../infra/repositories';
import { UpdateWhatsHappeningDto } from '../interfaceAdapters/dto';
import { IWhatsHappening } from '../interfaces';
export declare class WhatsHappeningService {
    private readonly whatsHappeningRepository;
    constructor(whatsHappeningRepository: WhatsHappeningRepository);
    create(data: IWhatsHappening): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatsHappeningEntity[]>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateWhatsHappeningDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatsHappeningEntity>, 'statusCode'>>>;
}
