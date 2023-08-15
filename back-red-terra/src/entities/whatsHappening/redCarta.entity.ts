import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'tb_red_carta' })
export class RedCartaEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;
}
