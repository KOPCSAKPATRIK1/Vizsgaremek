import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stock } from './stock.entity';

@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: number;

  @OneToMany(() => Stock, (stock) => stock.size)
  stocks: Stock[];
}
