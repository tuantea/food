import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Payment } from './entities/payment.entity';
import { Order_Items } from './entities/order_Items.entity';
import { FoodModule } from '../food/food.module';
import { Food } from '../food/entities/food.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Payment, Order_Items, Food]),
    UserModule,
    FoodModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
