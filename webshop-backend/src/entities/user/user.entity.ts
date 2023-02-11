import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingCart } from '../cart/shoppingCart.entity';
import { Order } from '../order/order.entity';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.user)
  shoppingCarts: ShoppingCart[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
