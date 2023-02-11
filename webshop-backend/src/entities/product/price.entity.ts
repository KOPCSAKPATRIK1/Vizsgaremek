import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartItem } from '../cart/shoppingCartItem.entity';
import { Product } from './product.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @ManyToOne(() => Product, (product) => product.prices)
  product: Product;

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.product)
  cartItems: ShoppingCartItem[];
}
