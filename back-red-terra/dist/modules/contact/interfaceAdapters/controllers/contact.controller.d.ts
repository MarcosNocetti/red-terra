import { ContactEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { ContactService } from '../../services/contact.service';
import { ContactDto, UpdateContactDto } from '../dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    getContact(language: LanguageType): Promise<IResponse<ContactEntity>>;
    get(): Promise<IResponse<ContactEntity[]>>;
    createContact(data: ContactDto): Promise<IResponse<ContactEntity>>;
    updateContact(id: string, data: UpdateContactDto): Promise<IResponse<ContactEntity>>;
}
