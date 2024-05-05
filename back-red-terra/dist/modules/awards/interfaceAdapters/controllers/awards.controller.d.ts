import { AwardsEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { AwardsService } from '../../services/awards.service';
import { AwardsDto, UpdateAwardsDto } from '../dto';
export declare class AwardsController {
    private readonly awardsService;
    constructor(awardsService: AwardsService);
    getAwards(): Promise<IResponse<AwardsEntity[]>>;
    getAwardsByLang(language: LanguageType, data: {
        whoWeAreId?: string;
        documentaryId?: string;
    }): Promise<IResponse<AwardsEntity>>;
    createAwards(data: AwardsDto): Promise<IResponse<AwardsEntity>>;
    updateAwards(id: string, data: UpdateAwardsDto): Promise<IResponse<AwardsEntity>>;
    deleteAward(id: string): Promise<IResponse<AwardsEntity>>;
}
