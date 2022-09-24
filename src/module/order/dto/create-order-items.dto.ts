import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemsDto {
  orderId: number;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  foodId: number;
}
