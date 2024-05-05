import { WhatWeDoEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { LanguageType } from 'src/shared/types';
import { WhatWeDoService } from '../../services/whatWeDo.service';
import { WhatWeDoDto, UpdateWhatWeDoDto } from '../dto';
export declare class WhatWeDoController {
    private readonly whatWeDoService;
    constructor(whatWeDoService: WhatWeDoService);
    get(): Promise<IResponse<WhatWeDoEntity[]>>;
    getWhatWeDo(language: LanguageType): Promise<IResponse<WhatWeDoEntity>>;
    createWhatWeDo(data: WhatWeDoDto): Promise<IResponse<WhatWeDoEntity>>;
    updateWhatWeDo(id: string, data: UpdateWhatWeDoDto): Promise<IResponse<WhatWeDoEntity>>;
}
