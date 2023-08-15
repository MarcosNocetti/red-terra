import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { AwardsEntity } from '../awards';
import { WhatWeDoEntity } from '../whatWeDo';

@Entity({ name: 'tb_documentaries' })
export class DocumentaryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'video_url' })
  videoUrl: string;

  @Column({ name: 'image_url', type: 'longtext' })
  imageUrl: string;

  @Column({ type: 'text' })
  sinopse: string;

  @Column({ name: 'sinopse_url' })
  sinopseUrl: string;

  @Column({ name: 'sinopse_url_label' })
  sinopseUrlLabel: string;

  @Column()
  availability: string;

  @Column()
  active: boolean;

  @Column({ name: 'what_we_do_id' })
  whatWeDoId: string;

  @ManyToOne(() => WhatWeDoEntity)
  @JoinColumn({ name: 'what_we_do_id', referencedColumnName: 'id' })
  whatWeDo?: WhatWeDoEntity;

  @OneToMany(() => AwardsEntity, (awards) => awards.documentary)
  awards?: AwardsEntity[];
}
