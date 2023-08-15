import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { DocumentaryEntity } from '../documentaries';
import { WhoWeAreEntity } from '../whoWeAre';

@Entity({ name: 'tb_awards' })
export class AwardsEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'image_url', nullable: true, type: 'longtext' })
  imageUrl?: string;

  @Column({ name: 'documentary_id', nullable: true })
  documentaryId?: string;

  @ManyToOne(() => DocumentaryEntity)
  @JoinColumn({ name: 'documentary_id', referencedColumnName: 'id' })
  documentary?: DocumentaryEntity;

  @Column({ name: 'who_we_are_id', nullable: true })
  whoWeAreId?: string;

  @ManyToOne(() => WhoWeAreEntity)
  @JoinColumn({ name: 'who_we_are_id', referencedColumnName: 'id' })
  whoWeAre?: WhoWeAreEntity;
}
