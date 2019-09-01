import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
