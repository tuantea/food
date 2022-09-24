import { Order } from '../../order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'ship' })
export class Ship {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Order, (listShip) => listShip.shipId)
  listShip: Order[];

  @Column()
  createDate: Date;

  @Column()
  updateDate: Date;
}
