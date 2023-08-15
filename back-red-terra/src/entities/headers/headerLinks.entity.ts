import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IHeaderLinkEntity } from '../../modules/headers/interfaces';
import { HeaderEntity } from './';

@Entity({ name: 'tb_header_links' })
export class HeaderLinkEntity extends BaseEntity implements IHeaderLinkEntity {
  @Column()
  label: string;

  @Column({ name: 'header_id' })
  headerId: string;

  @ManyToOne(() => HeaderEntity)
  @JoinColumn({ name: 'header_id', referencedColumnName: 'id' })
  header?: HeaderEntity;
}
