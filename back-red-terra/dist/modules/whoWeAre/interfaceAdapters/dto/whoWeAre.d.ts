import { LanguageType } from 'src/shared/types';
export declare class WhoWeAreDto {
    bannerUrl: string;
    title: string;
    text: string;
    quote: string;
    quoteAuthor: string;
    teamTitle: string;
    creditTitle: string;
    headerId: string;
    rdnTitle: string;
    rdnDescription: string;
    clientReviewTitle: string;
    language: LanguageType;
}
export declare class UpdateWhoWeAreDto {
    id: string;
    bannerUrl: string;
    title: string;
    text: string;
    quote: string;
    quoteAuthor: string;
    teamTitle: string;
    creditTitle: string;
    headerId: string;
    rdnTitle: string;
    rdnDescription: string;
    clientReviewTitle: string;
    language: LanguageType;
}
