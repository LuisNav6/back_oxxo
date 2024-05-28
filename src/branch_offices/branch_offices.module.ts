// branch_offices.module.ts
import { Module } from '@nestjs/common';
import { BranchOfficesController } from './branch_offices.controller';
import { BranchOfficesService } from './branch_offices.service';
import { BranchOfficesProviders } from './branch_offices.providers';
import { DatabaseModule } from '../bd/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BranchOfficesController],
  providers: [
    BranchOfficesService,
    ...BranchOfficesProviders,
  ],
})
export class BranchOfficesModule {}
