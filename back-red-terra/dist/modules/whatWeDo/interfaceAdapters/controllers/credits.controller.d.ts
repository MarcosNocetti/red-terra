import { CreditEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { CreditsService } from '../../services';
import { CreditsDto, UpdateCreditsDto } from '../dto';
export declare class CreditsController {
    private readonly creditsService;
    constructor(creditsService: CreditsService);
    get(): Promise<IResponse<CreditEntity[]>>;
    getCreditsByWhatWeDo(id: string): Promise<IResponse<CreditEntity>>;
    createCredits(data: CreditsDto): Promise<IResponse<CreditEntity>>;
    updateCredits(id: string, data: UpdateCreditsDto): Promise<IResponse<CreditEntity>>;
    deleteCredit(id: string): Promise<IResponse<CreditEntity>>;
}
