import { Controller, Get, Post, Body, Param, Put, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/products/request/createProduct.dto';
import { updateProductDto } from 'src/dtos/products/request/updateProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.MulterFile) {
    return this.ProductsService.create(createProductDto, file);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('photo'))
  update(@Param('id') id: string, @Body() updateProductDto: updateProductDto, @UploadedFile() file: Express.MulterFile) {
    return this.ProductsService.update(id, updateProductDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductsService.delete(id);
  }
}