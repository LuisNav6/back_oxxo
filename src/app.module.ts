import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './bd/database.providers';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BranchOfficesModule } from './branch_offices/branch_offices.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductsModule } from './products/products.module';
import { GoogleDriveService } from './google/google-drive.service';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [UsersModule, AuthModule,InventoryModule,BranchOfficesModule, ProductsModule, SalesModule],
  controllers: [AppController],
  providers: [AppService,...databaseProviders, GoogleDriveService],
})
export class AppModule {}
