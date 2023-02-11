import { UseFilters } from '@nestjs/common';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../order/order.entity';
import { User } from '../user/user.entity';
import { ShoppingCartItem } from './shoppingCartItem.entity';

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.shoppingCarts)
  user: User;

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.product)
  cartItems: ShoppingCartItem[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
