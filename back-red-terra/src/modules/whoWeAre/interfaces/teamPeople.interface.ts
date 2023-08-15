import { LanguageType } from 'src/shared/types';

export interface ITeamPeople {
  name: string;
  position: string;
  resume: string;
  url: string;
  photoUrl: string;
  whoWeAreId: string;
  language?: LanguageType;
}
