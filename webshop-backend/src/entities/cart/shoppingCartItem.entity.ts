import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Price } from '../product/price.entity';
import { Product } from '../product/product.entity';
import { ShoppingCart } from './shoppingCart.entity';

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Product;

  @ManyToOne(() => Price, (price) => price.cartItems)
  price: Price;

  @ManyToOne(() => ShoppingCart, (cart) => cart.cartItems)
  cart: ShoppingCart;
}
