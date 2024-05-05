import { LanguageType } from 'src/shared/types';
export declare class ContactDto {
    bannerUrl: string;
    telephone: string;
    email: string;
    description: string;
    quote: string;
    quoteAuthor: string;
    language: LanguageType;
}
export declare class UpdateContactDto {
    id: string;
    bannerUrl: string;
    telephone: string;
    email: string;
    description: string;
    quote: string;
    quoteAuthor: string;
    language: LanguageType;
}
