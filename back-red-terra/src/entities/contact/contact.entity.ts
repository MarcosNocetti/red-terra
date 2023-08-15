import { IContactEntity } from 'src/modules/contact/interfaces';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'tb_contacts' })
export class ContactEntity extends BaseEntity implements IContactEntity {
  @Column({ name: 'banner_url', type: 'longtext' })
  bannerUrl: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  quote: string;

  @Column({ name: 'quote_author' })
  quoteAuthor: string;
}
