import { HomeEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces';
import { HomeService } from '../../services/home.service';
import { HomeDto } from '../dto';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    getHome(): Promise<IResponse<HomeEntity>>;
    createHome(data: HomeDto): Promise<IResponse<HomeEntity>>;
    updateHome(id: string, data: HomeDto): Promise<IResponse<HomeEntity>>;
}
