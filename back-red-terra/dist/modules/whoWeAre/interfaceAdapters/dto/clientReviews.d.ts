import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { IClientReviewsEntity } from '../../interfaces';
export declare class ClientReviewsDto {
    name: string;
    position: string;
    personName: string;
    review: string;
    whoWeAreId: string;
    language: LanguageType;
}
export declare class UpdateClientReviewsDto implements Omit<IClientReviewsEntity, BaseEntityOmitPropsType> {
    id: string;
    name: string;
    position: string;
    personName: string;
    review: string;
    whoWeAreId: string;
    language: LanguageType;
}
