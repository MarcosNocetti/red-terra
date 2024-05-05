import { LanguageType } from 'src/shared/types';
export interface IClientReviews {
    name: string;
    position: string;
    personName: string;
    review: string;
    whoWeAreId: string;
    language?: LanguageType;
}
