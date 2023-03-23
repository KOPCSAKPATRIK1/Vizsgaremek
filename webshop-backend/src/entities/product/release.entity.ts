import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Release {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  releaseDate: string;

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
}
