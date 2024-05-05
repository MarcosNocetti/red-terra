import { HeaderEntity, HeaderLinkEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { HeadersService } from '../../services/headers.service';
import { HeaderDto, HeaderLinkDto, UpdateHeaderDto } from '../dto';
export declare class HeadersController {
    private readonly headersService;
    constructor(headersService: HeadersService);
    getHeader(lang: LanguageType): Promise<IResponse<HeaderEntity>>;
    getHeaders(): Promise<IResponse<HeaderEntity[]>>;
    createHeader(data: HeaderDto): Promise<IResponse<HeaderEntity>>;
    createLink(data: HeaderLinkDto): Promise<IResponse<HeaderLinkEntity>>;
    updateHeader(id: string, data: UpdateHeaderDto): Promise<IResponse<HeaderEntity>>;
}
