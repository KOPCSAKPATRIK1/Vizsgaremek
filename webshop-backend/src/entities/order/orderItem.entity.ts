import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { Size } from '../product/size.entity';
import { User } from '../user/user.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(() => User, (user) => user.orderItems)
  user: User;

  @Column()
  userId: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;

  @Column()
  orderId: number;

  @ManyToOne(() => Size, (size) => size.stocks)
  size: Size;

  @Column()
  sizeId: number;
}
