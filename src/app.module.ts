import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './bd/database.providers';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BranchOfficesModule } from './branch_offices/branch_offices.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, AuthModule,InventoryModule,BranchOfficesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService,...databaseProviders],
})
export class AppModule {}
