import { Food } from '../../food/entities/food.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'orderitems' })
export class Order_Items {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  orderId: number;
  @Column()
  amount: number;
  @Column()
  foodId: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @OneToOne(() => Food)
  @JoinColumn({ name: 'foodId', referencedColumnName: 'id' })
  food: Food;
}
