import { Module } from '@nestjs/common';
import { SalesProviders } from './sales.providers';
import { SaleService } from '../sales/sales.service';
import { InventoryService } from '../inventory/inventory.service';
import { InventoryProviders } from '../inventory/inventory.providers';
import { DatabaseModule } from '../bd/database.module';
import { SalesController } from './sales.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [SalesController],
  providers: [
    ...SalesProviders,
    SaleService,
    ...InventoryProviders,
    InventoryService,
  ],
  exports: [SaleService, InventoryService],
})
export class SaleModule {}
