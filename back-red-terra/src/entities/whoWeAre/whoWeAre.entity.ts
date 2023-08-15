import { IWhoWeAreEntity } from 'src/modules/whoWeAre/interfaces';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { HeaderEntity } from '../headers';
import { ClientReviewEntity, RdnEntity, TeamPeopleEntity } from './';

@Entity({ name: 'tb_who_we_are' })
export class WhoWeAreEntity extends BaseEntity implements IWhoWeAreEntity {
  @Column({ name: 'banner_url', type: 'longtext' })
  bannerUrl: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  text: string;

  @Column()
  quote: string;

  @Column({ name: 'quote_author' })
  quoteAuthor: string;

  @Column({ name: 'team_title' })
  teamTitle: string;

  @Column({ name: 'credit_title' })
  creditTitle: string;

  @Column({ name: 'header_id' })
  headerId: string;

  @OneToOne(() => HeaderEntity)
  header?: HeaderEntity;

  @OneToMany(() => TeamPeopleEntity, (teamPeople) => teamPeople.whoWeAre)
  teamPeople?: TeamPeopleEntity[];

  @Column({ name: 'rdn_title' })
  rdnTitle: string;

  @Column({ name: 'rdn_description' })
  rdnDescription: string;

  @OneToMany(() => RdnEntity, (rdn) => rdn.whoWeAre)
  rdns?: RdnEntity[];

  @Column()
  clientReviewTitle: string;

  @OneToMany(() => ClientReviewEntity, (clientReview) => clientReview.whoWeAre)
  clientReviews?: ClientReviewEntity[];
}
