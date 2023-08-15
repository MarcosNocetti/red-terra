import { IWhatWeDoEntity } from 'src/modules/whatWeDo/interfaces';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CreditEntity } from './';
import { DocumentaryEntity } from '../documentaries';

@Entity({ name: 'tb_what_we_do' })
export class WhatWeDoEntity extends BaseEntity implements IWhatWeDoEntity {
  @Column({ name: 'banner_url', type: 'longtext' })
  bannerUrl: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  text: string;

  @OneToMany(() => CreditEntity, (credit) => credit.whatWeDo)
  credits?: CreditEntity[];

  @OneToMany(() => DocumentaryEntity, (documentary) => documentary.whatWeDo)
  documentaries?: DocumentaryEntity[];

  @Column({ name: 'credit_title' })
  creditTitle: string;
}
