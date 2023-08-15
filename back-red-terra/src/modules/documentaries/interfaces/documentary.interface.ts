import { LanguageType } from 'src/shared/types';

export interface IDocumentary {
  name: string;
  videoUrl: string;
  sinopse: string;
  sinopseUrl: string;
  sinopseUrlLabel: string;
  imageUrl: string;
  availability: string;
  active: boolean;
  relationId?: string;
  language?: LanguageType;
}
