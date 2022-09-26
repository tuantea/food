import { Food } from '../../food/entities/food.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
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
  status: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @OneToOne(() => Food)
  @JoinColumn({ name: 'foodId', referencedColumnName: 'id' })
  food: Food;
  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orderId', referencedColumnName: 'id' })
  order: Order;
}
