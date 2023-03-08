import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingCartItem } from '../cart/shoppingCartItem.entity';
import { Order } from '../order/order.entity';
import { OrderItem } from '../order/orderItem.entity';
import { Address } from './address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.user)
  cartItems: ShoppingCartItem[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.user)
  orderItems: OrderItem[];
}
