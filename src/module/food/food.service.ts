import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepo: Repository<Food>,
  ) {}
  create(createFoodDto: CreateFoodDto) {
    return this.foodRepo.save(createFoodDto);
  }

  findAll() {
    return this.foodRepo.find();
  }

  findOne(name: string) {
    return this.foodRepo.findOne({ where: { name: name } });
  }

  update(id: number, updateFoodDto: CreateFoodDto) {
    if (this.foodRepo.findOne({ where: { id: id } })) {
      return this.foodRepo.update(id, updateFoodDto);
    }
    return `Food khong ton tai`;
  }

  remove(id: number) {
    return this.foodRepo.delete(id);
  }
}
