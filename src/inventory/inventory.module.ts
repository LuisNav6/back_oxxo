import { Module } from '@nestjs/common';
import { InventoryProviders } from './inventory.providers';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { DatabaseModule } from 'src/bd/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InventoryController],
  providers: [
    InventoryService,
    ...InventoryProviders,
  ],
  exports: [InventoryService],

})
export class InventoryModule {


}
