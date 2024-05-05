import { DocumentaryEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { DocumentaryRepository } from '../infra/repositories';
import { IDocumentary } from '../interfaces';
import { DocumentaryRelationRepository } from '../infra/repositories/documentaryRelation.repository';
export declare class DocumentaryService {
    private readonly documentaryRepository;
    private readonly documentaryRelationRepository;
    constructor(documentaryRepository: DocumentaryRepository, documentaryRelationRepository: DocumentaryRelationRepository);
    create(data: IDocumentary): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>>>;
    delete(documentaryId: string): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<DocumentaryEntity[], 'language'>>, 'statusCode'>>>;
    update(data: any): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<DocumentaryEntity, 'language'>>, 'statusCode'>>>;
}
