import { ITeamPeopleEntity } from 'src/modules/whoWeAre/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { WhoWeAreEntity } from './';

@Entity({ name: 'tb_team_people' })
export class TeamPeopleEntity extends BaseEntity implements ITeamPeopleEntity {
  @Column()
  name: string;

  @Column()
  position: string;

  @Column({ type: 'text' })
  resume: string;

  @Column({ nullable: true })
  url: string;

  @Column({ name: 'photo_url', type: 'longtext' })
  photoUrl: string;

  @Column({ name: 'who_we_are_id' })
  whoWeAreId: string;

  @ManyToOne(() => WhoWeAreEntity)
  @JoinColumn({ name: 'who_we_are_id', referencedColumnName: 'id' })
  whoWeAre?: WhoWeAreEntity;
}
