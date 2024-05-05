import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IRedCartaEntity } from '../../interfaces';
export declare class RedCartaDto {
    title: string;
    description: string;
    language: LanguageType;
}
export declare class UpdateRedCartaDto implements Omit<IRedCartaEntity, BaseEntityOmitPropsType> {
    id: string;
    title: string;
    description: string;
    language: LanguageType;
}
