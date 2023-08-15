import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUserEntity } from '../../modules/users/interfaces';
import { Exclude } from 'class-transformer';
import { compareHash } from '../../shared/utils/compareHash';

@Entity({ name: 'tb_users' })
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: false })
  active: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  validatePassword(password: string) {
    if (!this.password) {
      return false;
    }

    return compareHash(password, this.password);
  }
}
