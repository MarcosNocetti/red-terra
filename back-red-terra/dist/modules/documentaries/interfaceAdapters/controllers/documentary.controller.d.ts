import { DocumentaryEntity, DocumentaryRelationEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { DocumentaryService } from '../../services';
import { DocumentaryDto, UpdateDocumentaryDto } from '../dto';
import { DocumentaryRelationRepository } from '../../infra/repositories/documentaryRelation.repository';
export declare class DocumentaryController {
    private readonly documentaryService;
    private readonly documentaryRelationRepository;
    constructor(documentaryService: DocumentaryService, documentaryRelationRepository: DocumentaryRelationRepository);
    getDocumentary(): Promise<IResponse<DocumentaryEntity[]>>;
    getDocumentaryByRelation(id: string): Promise<IResponse<DocumentaryRelationEntity[]>>;
    createDocumentary(data: DocumentaryDto): Promise<IResponse<DocumentaryEntity>>;
    updateDocumentary(id: string, data: UpdateDocumentaryDto): Promise<IResponse<DocumentaryEntity>>;
    deleteDocumentary(id: string): Promise<IResponse<DocumentaryEntity>>;
}
