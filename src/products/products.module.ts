import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatabaseModule } from '../bd/database.module';
import { ProductsProviders } from './products.providers';
import { GoogleDriveService } from 'src/google/google-drive.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...ProductsProviders, GoogleDriveService
  ],
})
export class ProductsModule {}
