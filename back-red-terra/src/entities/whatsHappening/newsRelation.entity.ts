import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { NewsEntity } from './news.entity';

@Entity({ name: 'tb_news_relation' })
export class NewsRelationEntity extends BaseEntity {
  @Column({ name: 'news_en_id', nullable: true })
  newsEnId?: string;

  @OneToOne(() => NewsEntity)
  @JoinColumn({ name: 'news_en_id', referencedColumnName: 'id' })
  newsEn?: NewsEntity;

  @Column({ name: 'news_br_id', nullable: true })
  newsBrId?: string;

  @OneToOne(() => NewsEntity)
  @JoinColumn({ name: 'news_br_id', referencedColumnName: 'id' })
  newsBr?: NewsEntity;
}
