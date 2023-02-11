import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartItem } from '../cart/shoppingCartItem.entity';
import { Category } from './category.entity';
import { Price } from './price.entity';
import { Size } from './size.entity';
import { Stock } from './stock.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Stock, (stock) => stock.product)
  stocks: Stock[];

  @OneToMany(() => Price, (price) => price.product)
  prices: Price[];

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.product)
  cartItems: ShoppingCartItem[];

  @ManyToMany(() => Size)
  @JoinTable()
  sizes: Size;
}
