import { RedCartaEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { RedCartaService } from '../../services';
import { RedCartaDto, UpdateRedCartaDto } from '../dto';
export declare class RedCartaController {
    private readonly redCartaService;
    constructor(redCartaService: RedCartaService);
    get(): Promise<IResponse<RedCartaEntity[]>>;
    createRedCarta(data: RedCartaDto): Promise<IResponse<RedCartaEntity>>;
    updateRedCarta(id: string, data: UpdateRedCartaDto): Promise<IResponse<RedCartaEntity>>;
    deleteRedCarta(id: string): Promise<IResponse<RedCartaEntity>>;
}
