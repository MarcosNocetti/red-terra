import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IRdnEntity } from '../../interfaces';
export declare class RdnDto {
    title: string;
    description: string;
    personName: string;
    text: string;
    url?: string;
    whoWeAreId: string;
    language: LanguageType;
}
export declare class UpdateRdnDto implements Omit<IRdnEntity, BaseEntityOmitPropsType> {
    id: string;
    title: string;
    description: string;
    personName: string;
    text: string;
    url?: string;
    whoWeAreId: string;
    language: LanguageType;
}
