import { ApiProperty } from '@nestjs/swagger';
export class CreateFoodDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  cost: number;
}
