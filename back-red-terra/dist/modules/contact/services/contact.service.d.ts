import { ContactEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { ContactRepository } from '../infra/repositories';
import { UpdateContactDto } from '../interfaceAdapters/dto';
import { IContact } from '../interfaces';
export declare class ContactService {
    private readonly contactRepository;
    constructor(contactRepository: ContactRepository);
    create(data: IContact): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<ContactEntity, 'language'>>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<ContactEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<ContactEntity[], 'language'>>, 'statusCode'>>>;
    update(data: UpdateContactDto): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<ContactEntity>, 'statusCode'>>>;
}
