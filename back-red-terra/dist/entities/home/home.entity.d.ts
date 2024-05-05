import { IHomeEntity } from 'src/modules/home/interfaces';
import { BaseEntity } from '../../config/base.entity';
export declare class HomeEntity extends BaseEntity implements IHomeEntity {
    videoUrl: string;
}
