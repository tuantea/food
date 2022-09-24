import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
@Entity({ name: 'payment' })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  status: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @OneToOne(() => Order)
  @JoinColumn({ name: 'id', referencedColumnName: 'paymentId' })
  order: Order;
}
