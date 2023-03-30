import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { Size } from '../product/size.entity';
import { User } from '../user/user.entity';

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.cartItems)
  user: User;

  @Column()
  userId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(() => Size)
  size: Size;

  @Column()
  sizeId: number;
}
