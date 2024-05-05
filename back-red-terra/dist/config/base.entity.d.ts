import { LanguageType } from 'src/shared/types';
export declare abstract class BaseEntity {
    id: string;
    language?: LanguageType;
    createdAt: Date;
    updatedAt: Date;
}
