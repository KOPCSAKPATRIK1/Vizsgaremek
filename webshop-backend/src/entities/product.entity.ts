import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SizePrice } from './sizePrice.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  productImage: string;

  @ManyToMany(() => SizePrice)
  @JoinTable()
  sizePrices: SizePrice[];
}
