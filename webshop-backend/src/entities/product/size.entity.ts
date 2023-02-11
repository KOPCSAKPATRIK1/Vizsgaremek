import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Stock } from './stock.entity';

@Entity()
export class Size {
  @PrimaryColumn()
  id: number;

  @Column()
  size: number;

  @OneToMany(() => Stock, (stock) => stock.size)
  stocks: Stock[];
}
