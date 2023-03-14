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
import { OrderItem } from '../order/orderItem.entity';
import { Category } from './category.entity';
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
  imageUrl1: string;

  @Column()
  imageUrl2: string;

  @Column()
  imageUrl3: string;

  @Column()
  imageUrl4: string;

  @Column()
  price: number;

  @Column()
  popular: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Stock, (stock) => stock.product)
  stocks: Stock[];

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.product)
  cartItems: ShoppingCartItem[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.user)
  orderItems: OrderItem[];

  @OneToMany(() => ShoppingCartItem, (shoppingCartItem) => shoppingCartItem.user)
  shoppingCartItems: ShoppingCartItem[];

  @ManyToMany(() => Size)
  @JoinTable()
  sizes: Size;
}
