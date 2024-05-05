import { UpdateFooterLinkDto } from './../dto/footerLink';
import { FooterEntity, FooterLinkEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { FooterService } from '../../services/footer.service';
import { FooterDto, FooterLinkDto, UpdateFooterDto } from '../dto';
export declare class FooterController {
    private readonly footerService;
    constructor(footerService: FooterService);
    createFooter(data: FooterDto): Promise<IResponse<FooterEntity>>;
    updateFooter(id: string, data: UpdateFooterDto): Promise<IResponse<FooterEntity>>;
    createFooterLink(data: FooterLinkDto): Promise<IResponse<FooterLinkEntity>>;
    getFooters(): Promise<IResponse<FooterEntity[]>>;
    getLinks(): Promise<IResponse<FooterLinkEntity[]>>;
    updateLink(id: string, data: UpdateFooterLinkDto): Promise<IResponse<FooterLinkEntity>>;
    getFooter(language: LanguageType): Promise<IResponse<FooterEntity>>;
}
