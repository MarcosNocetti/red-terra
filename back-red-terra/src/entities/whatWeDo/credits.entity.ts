import { ICreditsEntity } from 'src/modules/whatWeDo/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { WhatWeDoEntity } from './';

@Entity({ name: 'tb_credits' })
export class CreditEntity extends BaseEntity implements ICreditsEntity {
  @Column()
  subtitle: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ name: 'what_we_do_id', nullable: true })
  whatWeDoId: string;

  @ManyToOne(() => WhatWeDoEntity)
  @JoinColumn({ name: 'what_we_do_id', referencedColumnName: 'id' })
  whatWeDo?: WhatWeDoEntity;
}
