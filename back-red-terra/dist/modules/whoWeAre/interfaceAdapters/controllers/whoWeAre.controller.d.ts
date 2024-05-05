import { WhoWeAreEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhoWeAreService } from '../../services/whoWeAre.service';
import { WhoWeAreDto, UpdateWhoWeAreDto } from '../dto';
export declare class WhoWeAreController {
    private readonly whoWeAreService;
    constructor(whoWeAreService: WhoWeAreService);
    get(): Promise<IResponse<WhoWeAreEntity[]>>;
    getWhoWeAre(language: LanguageType): Promise<IResponse<WhoWeAreEntity>>;
    createWhoWeAre(data: WhoWeAreDto): Promise<IResponse<WhoWeAreEntity>>;
    updateWhoWeAre(id: string, data: UpdateWhoWeAreDto): Promise<IResponse<WhoWeAreEntity>>;
}
