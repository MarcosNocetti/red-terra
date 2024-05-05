import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { INewsEntity } from '../../interfaces';
export declare class NewsDto {
    imageUrl: string;
    title: string;
    text: string;
    backgroundColor?: string;
    monthYear?: string;
    description?: string;
    textColor?: string;
    linkUrl: string;
    newsId?: string;
    whatsHappeningId?: string;
    relationId?: string;
    isRedCarta?: boolean;
    language: LanguageType;
}
export declare class UpdateNewsDto implements Omit<INewsEntity, BaseEntityOmitPropsType> {
    id: string;
    imageUrl: string;
    title: string;
    text: string;
    whatsHappeningId?: string;
    description?: string;
    backgroundColor?: string;
    textColor?: string;
    linkUrl: string;
    newsId?: string;
    isRedCarta?: boolean;
    relationId?: string;
    monthYear?: string;
    language: LanguageType;
}
