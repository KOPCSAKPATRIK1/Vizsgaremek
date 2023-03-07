import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from '../order/orderItem.entity';
import { Stock } from './stock.entity';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  @OneToMany(() => Stock, (stock) => stock.size)
  stocks: Stock[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.size)
  orderItems: OrderItem[];
}
