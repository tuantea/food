import { Food } from 'src/module/food/entities/food.entity';
import { User } from 'src/module/user/entities/user.entity';
import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  foodId: number;
  @Column()
  userId: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @OneToMany(() => Food)
  @JoinColumn({ name: 'foodId', referencedColumnName: 'id' })
  foodorder: Food[];
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  userOrder: User;
}
