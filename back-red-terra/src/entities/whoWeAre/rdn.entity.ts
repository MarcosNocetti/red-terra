import { IRdnEntity } from 'src/modules/whoWeAre/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';

@Entity({ name: 'tb_rdn' })
export class RdnEntity extends BaseEntity implements IRdnEntity {
  @Column({ name: 'person_name' })
  personName: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ name: 'who_we_are_id' })
  whoWeAreId: string;

  @ManyToOne(() => WhoWeAreEntity)
  @JoinColumn({ name: 'who_we_are_id', referencedColumnName: 'id' })
  whoWeAre?: WhoWeAreEntity;
}
