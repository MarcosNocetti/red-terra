import { NewsEntity } from 'src/entities';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'tb_whats_happenings' })
export class WhatsHappeningEntity extends BaseEntity {
  @Column({ name: 'banner_url', type: 'longtext' })
  bannerUrl: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @OneToMany(() => NewsEntity, (news) => news.whatsHappening)
  news: NewsEntity[];
}
