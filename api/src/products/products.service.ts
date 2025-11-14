import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private userRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const user = new Product();
    user.price = createProductDto.price;
    user.name = createProductDto.name;
    user.description = createProductDto.description;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Product[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Product not found');
    }
    await this.userRepository.update({ id }, updateProductDto);
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
