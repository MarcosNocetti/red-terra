import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { DocumentaryEntity } from './documentaries.entity';

@Entity({ name: 'tb_documentaries_relation' })
export class DocumentaryRelationEntity extends BaseEntity {
  @Column({ name: 'documentary_en_id', nullable: true })
  documentaryEnId?: string;

  @OneToOne(() => DocumentaryEntity)
  @JoinColumn({ name: 'documentary_en_id', referencedColumnName: 'id' })
  documentaryEn?: DocumentaryEntity;

  @Column({ name: 'documentary_br_id', nullable: true })
  documentaryBrId?: string;

  @OneToOne(() => DocumentaryEntity)
  @JoinColumn({ name: 'documentary_br_id', referencedColumnName: 'id' })
  documentaryBr?: DocumentaryEntity;
}
