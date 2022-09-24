import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order_Items } from './order_Items.entity';
@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  paymentId: number;
  @Column()
  total: number;
  @Column()
  shipId: number;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @OneToMany(() => Order_Items, (listOrder) => listOrder.orderId)
  listOrder: Order_Items[];
}
