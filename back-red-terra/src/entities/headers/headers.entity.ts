import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IHeaderEntity } from '../../modules/headers/interfaces';
import { HeaderLinkEntity } from './';

@Entity({ name: 'tb_headers' })
export class HeaderEntity extends BaseEntity implements IHeaderEntity {
  @Column()
  imageUrl: string;

  @Column()
  textColor: string;

  @Column()
  backgroundColor: string;

  @OneToMany(() => HeaderLinkEntity, (headerLink) => headerLink.header)
  links?: HeaderLinkEntity[];
}
