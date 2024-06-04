import { Controller, Get, Post, Body, Param, Put, Delete, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/products/request/createProduct.dto';
import { updateProductDto } from 'src/dtos/products/request/updateProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('products')
@UseGuards(AuthGuard)
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
  @Roles(Role.SOPORTE)
  @UseInterceptors(FileInterceptor('photo'))
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.MulterFile) {
    return this.ProductsService.create(createProductDto, file);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('photo'))
  @Roles(Role.SOPORTE)
  update(@Param('id') id: string, @Body() updateProductDto: updateProductDto, @UploadedFile() file: Express.MulterFile) {
    return this.ProductsService.update(id, updateProductDto, file);
  }

  @Delete(':id')
  @Roles(Role.SOPORTE)
  remove(@Param('id') id: string) {
    return this.ProductsService.delete(id);
  }
}