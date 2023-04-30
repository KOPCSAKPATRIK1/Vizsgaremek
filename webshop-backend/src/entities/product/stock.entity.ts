import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Size } from './size.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  private _inStock: number;

  @Column()
  get inStock(): number {
    return this._inStock;
  }

  set inStock(value: number) {
    this._inStock = Math.max(value, 0);
  }

  @ManyToOne(() => Size, (size) => size.stocks)
  size: Size;

  @Column()
  sizeId: number;

  @ManyToOne(() => Product, (product) => product.stocks)
  product: Product;

  @Column()
  productId: number;
}
