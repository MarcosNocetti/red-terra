import { ClientReviewEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { ClientReviewsService } from '../../services';
import { ClientReviewsDto, UpdateClientReviewsDto } from '../dto';
export declare class ClientReviewController {
    private readonly clientReviewService;
    constructor(clientReviewService: ClientReviewsService);
    get(): Promise<IResponse<ClientReviewEntity[]>>;
    getClientReview(id: string): Promise<IResponse<ClientReviewEntity>>;
    createClientReview(data: ClientReviewsDto): Promise<IResponse<ClientReviewEntity>>;
    updateClientReview(id: string, data: UpdateClientReviewsDto): Promise<IResponse<ClientReviewEntity>>;
    deleteClientReview(id: string): Promise<IResponse<ClientReviewEntity>>;
}
