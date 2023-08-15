import { WhatsHappeningEntity } from 'src/entities';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'tb_news' })
export class NewsEntity extends BaseEntity {
  @Column({ name: 'image_url', type: 'longtext' })
  imageUrl: string;

  @Column()
  title: string;

  @Column({ name: 'month_year', nullable: true })
  monthYear: string;

  @Column({ type: 'text' })
  text: string;

  @Column()
  description?: string;

  @Column({ name: 'background_color', nullable: true })
  backgroundColor: string;

  @Column({ name: 'text_color', nullable: true })
  textColor: string;

  @Column({ name: 'is_red_carta', default: false })
  isRedCarta: boolean;

  @Column({ name: 'link_url' })
  linkUrl: string;

  @Column({ name: 'whats_happening_id', nullable: true })
  whatsHappeningId: string;

  @ManyToOne(() => WhatsHappeningEntity)
  @JoinColumn({ name: 'whats_happening_id', referencedColumnName: 'id' })
  whatsHappening?: WhatsHappeningEntity;
}
