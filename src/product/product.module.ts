import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductProviders } from './product.providers';
import { DatabaseModule } from 'src/bd/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProductService, ...ProductProviders],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
