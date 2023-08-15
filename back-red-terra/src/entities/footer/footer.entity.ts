import { IFooterEntity } from 'src/modules/footer/interfaces';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { FooterLinkEntity } from './';

@Entity({ name: 'tb_footers' })
export class FooterEntity extends BaseEntity implements IFooterEntity {
  @Column()
  copyright: string;

  @OneToMany(() => FooterLinkEntity, (footerLink) => footerLink.footer)
  links: FooterLinkEntity[];
}
