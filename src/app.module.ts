import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './bd/database.providers';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BranchOfficesModule } from './branch_offices/branch_offices.model';

@Module({
  imports: [UsersModule, AuthModule,BranchOfficesModule],
  controllers: [AppController],
  providers: [AppService,...databaseProviders],
})
export class AppModule {}
