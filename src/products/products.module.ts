import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatabaseModule } from '../bd/database.module';
import { ProductsProviders } from './products.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...ProductsProviders
  ],
})
export class ProductsModule {}
