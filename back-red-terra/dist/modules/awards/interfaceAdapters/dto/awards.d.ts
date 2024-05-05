import { LanguageType } from 'src/shared/types';
export declare class AwardsDto {
    name: string;
    language: LanguageType;
    imageUrl?: string;
    documentaryId?: string;
    whoWeAreId?: string;
}
export declare class UpdateAwardsDto {
    id: string;
    name: string;
    language: LanguageType;
    imageUrl?: string;
}
