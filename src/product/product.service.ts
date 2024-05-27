import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dtos/product/request/createProducto-request.dto';
import { IProduct } from 'src/interfaces/product';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<IProduct>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }
  async findAll(): Promise<IProduct[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<IProduct> {
    const user = await this.productModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  /*async update(id: string, updateUserDto: UpdateUserDto): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return updatedProduct;
  }*/

  async delete(id: string): Promise<void> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }
}
