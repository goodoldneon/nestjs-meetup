import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
