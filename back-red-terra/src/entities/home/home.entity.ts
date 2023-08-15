import { IHomeEntity } from 'src/modules/home/interfaces';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'tb_home' })
export class HomeEntity extends BaseEntity implements IHomeEntity {
  @Column({ name: 'video_url' })
  videoUrl: string;
}
