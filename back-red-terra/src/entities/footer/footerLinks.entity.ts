import { IFooterLinkEntity } from 'src/modules/footer/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { FooterEntity } from './';

@Entity({ name: 'tb_footer_links' })
export class FooterLinkEntity extends BaseEntity implements IFooterLinkEntity {
  @Column()
  link: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column()
  label: string;

  @Column({ name: 'footer_id' })
  footerId: string;

  @ManyToOne(() => FooterEntity)
  @JoinColumn({ name: 'footer_id', referencedColumnName: 'id' })
  footer?: FooterEntity;
}
