import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from '../bd/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UserService, ...UsersProviders],
  exports: [UserService],
})
export class UsersModule {}
