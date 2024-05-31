import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dtos/products/request/createProduct.dto';
import { updateProductDto } from 'src/dtos/products/request/updateProduct.dto';
import { Product } from 'src/interfaces/product';
import { GoogleDriveService } from '../google/google-drive.service';



@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
     private googleDriveService: GoogleDriveService,
  ) {}

  async create(createProductDto: CreateProductDto, file: Express.MulterFile): Promise<Product> {
    const photoUrl = await this.googleDriveService.uploadFile(file);
    const createdProduct = new this.productModel({ ...createProductDto, photo: photoUrl });
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException('Producto no encontrada');
    }
    return product;
  }

  async update(id: string, updateProductDto: updateProductDto, file: Express.MulterFile): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    if (file) {
      const photoUrl = await this.googleDriveService.uploadFile(file);
      updateProductDto.photo = photoUrl;
    }

    Object.assign(product, updateProductDto);
    return product.save();
  }

  async delete(id: string): Promise<void> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException('Producto no encontrada');
    }
  }
}
