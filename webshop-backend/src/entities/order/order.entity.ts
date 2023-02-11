import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { ShoppingCart } from '../cart/shoppingCart.entity';
import { Address } from '../user/address.entity';
import { User } from '../user/user.entity';
import { PaymentMethod } from './paymentMethod.entity';
import { ShippingMethod } from './shippingMethod.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalPrice: number;

  @Column()
  orderDate: Date;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Address, (address) => address.orders)
  address: Address;

  @ManyToOne(() => ShippingMethod, (shippingMethod) => shippingMethod.orders)
  shippingMethod: ShippingMethod;

  @ManyToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.orders)
  paymentMethod: PaymentMethod;

  @ManyToOne(() => ShoppingCart, (cart) => cart.orders)
  cart: ShoppingCart;
}
