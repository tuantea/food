import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  userId: number;
  paymentId: number;
}
