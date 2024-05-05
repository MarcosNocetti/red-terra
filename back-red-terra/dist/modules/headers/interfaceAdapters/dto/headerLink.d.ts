import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IHeaderLinkEntity } from '../../interfaces';
export declare class HeaderLinkDto {
    label: string;
    language: LanguageType;
    headerId: string;
}
export declare class UpdateHeaderLinkDto implements Omit<IHeaderLinkEntity, BaseEntityOmitPropsType> {
    id: string;
    language: LanguageType;
    label: string;
    headerId: string;
}
