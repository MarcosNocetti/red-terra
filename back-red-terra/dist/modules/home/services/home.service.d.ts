import { HomeEntity } from 'src/entities';
import { Either } from 'src/shared/errors';
import { IResponse } from 'src/shared/interfaces';
import { BaseEntityOmitPropsType } from 'src/shared/types';
import { HomeRepository } from '../infra/repositories';
import { IHome } from '../interfaces';
export declare class HomeService {
    private readonly homeRepository;
    constructor(homeRepository: HomeRepository);
    create(data: IHome): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<HomeEntity, 'language'>>, 'statusCode'>>>;
    get(): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<HomeEntity>, 'statusCode'>>>;
    update(data: Partial<Omit<HomeEntity, BaseEntityOmitPropsType>>): Promise<Either<Omit<IResponse, 'statusCode'>, Omit<IResponse<Omit<HomeEntity, 'language'>>, 'statusCode'>>>;
}
