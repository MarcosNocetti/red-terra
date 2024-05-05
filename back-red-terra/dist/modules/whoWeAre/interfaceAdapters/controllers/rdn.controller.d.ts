import { RdnEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { RdnService } from '../../services';
import { RdnDto, UpdateRdnDto } from '../dto';
export declare class RdnController {
    private readonly rdnService;
    constructor(rdnService: RdnService);
    get(): Promise<IResponse<RdnEntity[]>>;
    getRdnByWhatWeDo(id: string): Promise<IResponse<RdnEntity>>;
    createRdn(data: RdnDto): Promise<IResponse<RdnEntity>>;
    updateRdn(id: string, data: UpdateRdnDto): Promise<IResponse<RdnEntity>>;
    deleteRdn(id: string): Promise<IResponse<RdnEntity>>;
}
