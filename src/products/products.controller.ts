import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/products/request/createProduct.dto';
import { updateProductDto } from 'src/dtos/products/request/updateProduct.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  findAll() {
    return this.ProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductsService.findById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.ProductsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: updateProductDto) {
    return this.ProductsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductsService.delete(id);
  }
}