import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class SizePrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  @Column()
  price: number;

  @ManyToMany(() => Product)
  products: Product[];
}
