import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Release {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  releaseData: Date;

  @Column()
  desc: string;

  @Column()
  imageUrl1: string;

  @Column()
  imageUrl2: string;

  @Column()
  imageUrl3: string;

  @Column()
  imageUrl4: string;
}
