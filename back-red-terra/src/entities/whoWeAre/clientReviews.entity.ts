import { IClientReviewsEntity } from 'src/modules/whoWeAre/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';

@Entity({ name: 'tb_client_reviews' })
export class ClientReviewEntity
  extends BaseEntity
  implements IClientReviewsEntity
{
  @Column()
  name: string;

  @Column()
  position: string;

  @Column({ name: 'person_name' })
  personName: string;

  @Column({ type: 'text' })
  review: string;

  @Column({ name: 'who_we_are_id' })
  whoWeAreId: string;

  @ManyToOne(() => WhoWeAreEntity)
  @JoinColumn({ name: 'who_we_are_id', referencedColumnName: 'id' })
  whoWeAre?: WhoWeAreEntity;
}
