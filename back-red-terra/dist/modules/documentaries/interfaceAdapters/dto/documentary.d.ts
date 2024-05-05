import { LanguageType } from 'src/shared/types';
export declare class DocumentaryDto {
    name: string;
    videoUrl: string;
    sinopse: string;
    sinopseUrl: string;
    sinopseUrlLabel: string;
    imageUrl: string;
    availability: string;
    active: boolean;
    relationId: string;
    language: LanguageType;
    whatWeDoId: string;
}
export declare class UpdateDocumentaryDto {
    id: string;
    name: string;
    videoUrl: string;
    sinopse: string;
    sinopseUrl: string;
    imageUrl: string;
    sinopseUrlLabel: string;
    availability: string;
    active: boolean;
    relationId: string;
    language: LanguageType;
    whatWeDoId: string;
}
