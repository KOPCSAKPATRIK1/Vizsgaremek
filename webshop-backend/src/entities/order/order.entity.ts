import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { OrderItem } from './orderItem.entity';
import { PaymentMethod } from './paymentMethod.entity';
import { ShippingMethod } from './shippingMethod.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: Date;

  @Column()
  address: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => ShippingMethod, (shippingMethod) => shippingMethod.orders)
  shippingMethod: ShippingMethod;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.orders)
  paymentMethod: PaymentMethod;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
}
