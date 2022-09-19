import { Order } from 'src/module/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @OneToMany(() => Order, (listOrder) => listOrder.foodId)
  listOrder: Order[];

  @Column()
  createDate: Date;

  @Column()
  updateDate: Date;
}
