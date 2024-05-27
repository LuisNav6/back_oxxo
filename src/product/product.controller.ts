import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { IProduct } from 'src/interfaces/product';
import { CreateProductDto } from 'src/dtos/product/request/createProducto-request.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create-product')
  async create(@Body() createProductDto: CreateProductDto): Promise<IProduct> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<IProduct[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IProduct> {
    return this.productService.findById(id);
  }

  /*@Put(':id')
  async update(
    @Param('id') id: string,
    @Body() name: string,
  ): Promise<Product> {
    try {
      return this.productService.update(id, updateUserDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }*/
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    try {
      await this.productService.delete(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
