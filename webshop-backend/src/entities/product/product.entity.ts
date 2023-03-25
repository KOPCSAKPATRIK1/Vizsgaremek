import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartItem } from '../cart/shoppingCartItem.entity';
import { OrderItem } from '../order/orderItem.entity';
import { Like } from '../user/like.entity';
import { Category } from './category.entity';
import { Size } from './size.entity';
import { Stock } from './stock.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  imageUrl1: string;

  @Column({nullable: true})
  imageUrl2: string;

  @Column({nullable: true})
  imageUrl3: string;

  @Column({nullable: true})
  imageUrl4: string;

  @Column()
  price: number;

  @Column()
  inactive: boolean;

  @Column()
  popular: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => Stock, (stock) => stock.product)
  stocks: Stock[];

  @OneToMany(() => ShoppingCartItem, (cartItem) => cartItem.product)
  cartItems: ShoppingCartItem[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.user)
  orderItems: OrderItem[];

  @OneToMany(
    () => ShoppingCartItem,
    (shoppingCartItem) => shoppingCartItem.user,
  )
  shoppingCartItems: ShoppingCartItem[];

  @OneToMany(() => Like, (like) => like.product)
  likes: Like[];

  @ManyToMany(() => Size)
  @JoinTable()
  sizes: Size;

  //Methods

  get numLikes(): number {
    return this.likes.length;
  }
}
