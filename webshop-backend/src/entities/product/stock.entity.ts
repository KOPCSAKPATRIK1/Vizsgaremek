import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Size } from './size.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inStock: number;

  @ManyToOne(() => Size, (size) => size.stocks)
  size: Size;

  @ManyToOne(() => Product, (product) => product.stocks)
  product: Product;
}
