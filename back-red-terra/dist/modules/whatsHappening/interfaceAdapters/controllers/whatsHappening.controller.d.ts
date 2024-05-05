import { WhatsHappeningEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhatsHappeningService } from '../../services';
import { WhatsHappeningDto, UpdateWhatsHappeningDto } from '../dto';
export declare class WhatsHappeningController {
    private readonly whatsHappeningService;
    constructor(whatsHappeningService: WhatsHappeningService);
    get(): Promise<IResponse<WhatsHappeningEntity[]>>;
    getWhatsHappening(language: LanguageType): Promise<IResponse<WhatsHappeningEntity>>;
    createWhatsHappening(data: WhatsHappeningDto): Promise<IResponse<WhatsHappeningEntity>>;
    updateWhatsHappening(id: string, data: UpdateWhatsHappeningDto): Promise<IResponse<WhatsHappeningEntity>>;
}
