import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../user/address.entity';
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

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => ShippingMethod, (shippingMethod) => shippingMethod.orders)
  shippingMethod: ShippingMethod;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.orders)
  paymentMethod: PaymentMethod;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'addressId' })
  address: Address;
}
