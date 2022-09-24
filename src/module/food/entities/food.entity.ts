import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'food' })
export class Food {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  cost: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
}
