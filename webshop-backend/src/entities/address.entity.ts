import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

  @Column()
  city: string;

  @Column()
  regionn: string;

  @Column()
  postalCode: number;

  @ManyToMany(() => User)
  users: User[];
}
