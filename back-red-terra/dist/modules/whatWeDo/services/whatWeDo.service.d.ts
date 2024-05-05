import { WhatWeDoEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType, LanguageType } from 'src/shared/types';
import { WhatWeDoRepository } from '../infra/repositories';
import { UpdateWhatWeDoDto } from '../interfaceAdapters/dto';
import { IWhatWeDo } from '../interfaces';
export declare class WhatWeDoService {
    private readonly whatWeDoRepository;
    constructor(whatWeDoRepository: WhatWeDoRepository);
    create(data: IWhatWeDo): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatWeDoEntity>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatWeDoEntity[]>, 'statusCode'>>>;
    getByLanguage(language: LanguageType): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatWeDoEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<UpdateWhatWeDoDto, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<WhatWeDoEntity>, 'statusCode'>>>;
}
