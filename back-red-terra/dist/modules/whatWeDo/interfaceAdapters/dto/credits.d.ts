import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { ICreditsEntity } from '../../interfaces';
export declare class CreditsDto {
    subtitle: string;
    text: string;
    language: LanguageType;
    whatWeDoId: string;
}
export declare class UpdateCreditsDto implements Omit<ICreditsEntity, BaseEntityOmitPropsType> {
    id: string;
    subtitle: string;
    text: string;
    language: LanguageType;
    whatWeDoId: string;
}
