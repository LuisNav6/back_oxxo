import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/bd/database.module';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SalesProviders } from './sales.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SalesController],
  providers: [
    SalesService,
    ...SalesProviders,
  ]

})
export class SalesModule {


}
