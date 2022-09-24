import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtPayload } from '../auth/payload.interface';
import { UserService } from '../user/user.service';
import { CreateOrderItemsDto } from './dto/create-order-items.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Order_Items } from './entities/order_Items.entity';
import { Payment } from './entities/payment.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(Order_Items)
    private readonly orderItemRepo: Repository<Order_Items>,
    @InjectRepository(Payment)
    private readonly paymentRepo: Repository<Payment>,
    private readonly userService: UserService,
  ) {}
  async createPayment(id: number) {
    return this.paymentRepo.save({ userId: id });
  }
  async findPayment(id: number) {
    return this.paymentRepo.findOne({ where: { userId: id, status: 0 } });
  }
  async findOrder(userReq: JwtPayload) {
    const user = await this.userService.userExist(userReq);
    const payment = await this.findPayment(user.id);
    if (!payment) return null;
    return this.orderRepo.findOne({
      where: { userId: user.id, paymentId: payment.id },
    });
  }
  async createOrder(userReq: JwtPayload) {
    const user = await this.userService.userExist(userReq);
    const payment = await this.createPayment(user.id);
    return this.orderRepo.save({ userId: user.id, paymentId: payment.id });
  }
  async createOrderItems(
    createOrderItemsDto: CreateOrderItemsDto,
    userReq: JwtPayload,
  ) {
    const order1 = await this.findOrder(userReq);
    if (!order1) {
      const order = await this.createOrder(userReq);
      createOrderItemsDto.orderId = order.id;
    } else {
      createOrderItemsDto.orderId = order1.id;
    }
    return this.orderItemRepo.save(createOrderItemsDto);
  }
  async findAll(userReq: JwtPayload) {
    const user = await this.userService.userExist(userReq);
    const order = await this.orderRepo.findOne({
      where: { userId: user.id },
      order: { createDate: 'DESC' },
    });
    console.log(order.listOrder);
    return order.listOrder;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
